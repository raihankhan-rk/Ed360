from api.services.__init__ import db


class Teachers(db.document):
    meta = {'collection': 'Teachers'}

    username = db.StringField()
    password = db.StringField()
    name = db.StringField()
