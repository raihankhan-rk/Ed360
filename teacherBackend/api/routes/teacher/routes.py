from flask import Blueprint, request, url_for, session, redirect
from flask_cors import cross_origin

from datetime import datetime
from pytz import timezone

from api.model.noticeboardmodel import NoticeBoardModel, NoticeModel
from api.schema.noticeboard import NoticeBoardSchema

from api.model.assignmentsmodel import AssignmentList, Assignment
from api.schema.assignments import AssignmentListSchema

from api.services.database import Teachers, Notice, Assignments, Students

teacher_bp = Blueprint('teacher', __name__)


@teacher_bp.route("/noticeboard/")
@cross_origin()
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


@teacher_bp.route("/set_notice/", methods=['POST'])
@cross_origin()
def set_notice():
    # if session:
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
    # else:
    #     return redirect(url_for("auth.login", redirect_uri=url_for(".set_notice")))


@teacher_bp.route("/assignments/", methods=['POST'])
@cross_origin()
def get_assignments():
    # if session:
    if request.method == 'post' or request.method == 'POST':
        resp = request.get_json()
        assignmentsAssigned = AssignmentList()
        teacher = Teachers.objects(name=resp['name']).first()
        for assignmentOID in teacher.assignments:
            assignmentOID = str(assignmentOID)
            assignmentOBJ = Assignments.objects(pk=assignmentOID).first()
            assignment = Assignment(assignmentOBJ.assignedTo, assignmentOBJ.assignedBy, assignmentOBJ.data,
                                    assignmentOBJ.date, assignmentOBJ.time, assignmentOBJ.assignmentID)
            assignment.assignedToMod()
            assignmentsAssigned.assignments.append(assignment)

        return AssignmentListSchema().dumps(assignmentsAssigned), 200

    # else:
    #     return redirect(url_for("auth.login", redirect_uri=url_for(".get_assignments")))


@teacher_bp.route("/set_assignment/", methods=['POST'])
@cross_origin()
def set_assignment():
    # if session:
    if request.method == 'post' or request.method == 'POST':
        resp = request.get_json()
        assignmentID = str(int(Assignments.objects.last().assignmentID) + 1).zfill(4)

        data = resp['data']

        now = datetime.now(timezone("Asia/Kolkata"))
        date = now.strftime("%d/%m/%Y")
        time = now.strftime("%H:%M")

        assignedBy = Teachers.objects(name=resp['name']).first().pk

        assignedTo = []
        for i in resp[assignedTo]:
            assignedTo.append({'studentID': Students.objects(name=i).first().pk,
                               'isChecked': False,
                               'isSubmitted': False,
                               'points': resp['points'],
                               'data': "",
                               'date': date,
                               'time': time})

            assignment = Assignments(assignedTo, assignedBy, data, date, time, assignmentID)
            assignment.save()

        for i in assignedTo:
            Students.objects(pk=i).first().update_one(push_assignments=assignment.pk)

        Teachers.objects(pk=session["user"]["userinfo"]["sub"][6:]).first().update_one(
            push_assignments=assignment.pk)

    return "Data received", 200

    # else:
    #     return redirect(url_for("auth.login", redirect_uri=url_for(".set_assignment")))
