from api.services.__init__ import db


class Notice(db.Document):
    meta = {'collection': 'Notice'}

    data = db.StringField()
    date = db.StringField()
    time = db.StringField()
    isFile = db.BooleanField()
    fileURL = db.URLField()
