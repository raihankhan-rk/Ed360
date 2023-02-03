from teacherBackend.api.services.__init__ import db


class Assignments(db.Document):
    meta = {'collection': 'Assignments'}

    assignedBy = db.ObjectIdField()
    assignedTo = db.ListField(db.DictField())
    data = db.StringField()
    date = db.StringField()
    time = db.StringField()
    assignmentID = db.StringField()


class Notice(db.Document):
    meta = {'collection': 'Notice'}

    data = db.StringField()
    date = db.StringField()
    time = db.StringField()
    isFile = db.BooleanField()
    fileURL = db.URLField()


class Students(db.Document):
    meta = {'collection': 'Students'}

    username = db.StringField()
    password = db.StringField()
    name = db.StringField()
    points = db.IntField()
    assignments = db.ListField(db.ObjectIdField())


class Teachers(db.Document):
    meta = {'collection': 'Teachers'}

    username = db.StringField()
    password = db.StringField()
    name = db.StringField()
    assignments = db.ListField(db.ObjectIdField())
