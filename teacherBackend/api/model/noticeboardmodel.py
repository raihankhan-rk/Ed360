class NoticeBoardModel:
    def __init__(self):
        self.notices = list()


class NoticeModel:
    def __init__(self, data, date, time, isFile, fileURL):
        self.data = data
        self.date = date
        self.time = time
        self.isFile = isFile
        self.fileURL = fileURL
