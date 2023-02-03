from flask_marshmallow import Schema
from marshmallow.fields import Str, Boolean, URL, Nested, List


class NoticeSchema(Schema):
    class Meta:
        fields = ['data', 'date', 'time', 'isFile', 'fileURL']

    data = Str()
    date = Str()
    time = Str()
    isFile = Boolean()
    fileURL = URL()


class NoticeBoardSchema(Schema):
    class Meta:
        fields = ["notices"]

    notices = List(Nested(NoticeSchema))
