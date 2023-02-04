from flask import Blueprint, request, session
from flask_cors import cross_origin

from datetime import datetime
from pytz import timezone

from api.model.noticeboardmodel import NoticeBoardModel, NoticeModel
from api.schema.noticeboard import NoticeBoardSchema

from api.model.assignmentsmodel import AssignmentList, Assignment
from api.schema.assignments import AssignmentListSchema

from api.services.database import Teachers, Notice, Assignments, Students

student_bp = Blueprint('student', __name__)


@student_bp.route("/noticeboard/")
def get_notices():
    # if session:
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
    # else:
    #     return redirect(url_for("auth.login", redirect_uri=url_for(".get_notices")))
