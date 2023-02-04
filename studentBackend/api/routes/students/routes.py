from flask import Blueprint, url_for, session, redirect

from studentBackend.api import Notice
from studentBackend.api.model.noticeboardmodel import NoticeBoardModel, NoticeModel
from studentBackend.api.schema.noticeboard import NoticeBoardSchema

student_bp = Blueprint('student', __name__)


@student_bp.route("/noticeboard/")
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
