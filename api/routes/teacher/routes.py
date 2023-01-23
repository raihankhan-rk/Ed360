from flask import Blueprint, request, url_for, session, redirect
from datetime import datetime
from flask_cors import cross_origin
from api.model.noticeboardmodel import NoticeBoardModel, NoticeModel
from api.schema.noticeboard import NoticeBoardSchema
from api.services.database.notice import Notice
from pytz import timezone

teacher_bp = Blueprint('teacher', __name__)


@teacher_bp.route("/noticeboard/")
@cross_origin()
def get_notices():
    if session:
        noticeBoard = NoticeBoardModel()
        for notices in Notice.objects:
            data = notices.data
            date = notices.date
            time = notices.time
            isFile = notices.isFile
            fileURL = notices.fileURL

            notice = NoticeModel(data, date, time, isFile, fileURL)
            noticeBoard.notices.append(notice)

        return NoticeBoardSchema().dumps(noticeBoard), 200
    else:
        return redirect(url_for("auth.login", redirect_uri=url_for(".get_notices")))


@teacher_bp.route("/set_notice/", methods=['GET', 'POST'])
@cross_origin()
def set_notice():
    if session:
        if request.method == 'post' or request.method == 'POST':
            resp = request.get_json()
            data = resp['data']

            now = datetime.now(timezone("Asia/Kolkata"))
            date = now.strftime("%d/%m/%Y")
            time = now.strftime("%H:%M")

            isFile = resp['isFile']
            fileURL = resp['fileURL']

            notice = Notice(data=data, date=date, time=time, isFile=isFile, fileURL=fileURL)
            notice.save()

        return "Data received", 200
    else:
        return redirect(url_for("auth.login", redirect_uri=url_for(".get_notices")))
