from api.services.__init__ import db


class Students(db.document):
    meta = {'collection': 'Students'}

    username = db.StringField()
    password = db.StringField()
    name = db.StringField()
