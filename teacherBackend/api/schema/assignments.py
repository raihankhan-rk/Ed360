from flask_marshmallow import Schema
from marshmallow.fields import Str, Nested, List, Dict


class AssignmentSchema(Schema):
    class Meta:
        fields = ['assignmentID', 'data', 'date', 'time', 'assignedTo']

    assignedTo = List(Dict())
    assignmentID = Str()
    data = Str()
    date = Str()
    time = Str()


class AssignmentListSchema(Schema):
    class Meta:
        fields = ['assignments']

    assignments = List(Nested(AssignmentSchema))
