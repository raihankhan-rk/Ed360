class AssignmentList:
    def __init__(self):
        self.assignments = list()


class Assignment:
    def __init__(self, assignedTo, assignedBy, data, date, time, assignmentID):
        self.assignedTo = assignedTo
        self.assignedBy = assignedBy
        self.data = data
        self.date = date
        self.time = time
        self.assignmentID = assignmentID

    def assignedToMod(self):
        for obj in self.assignedTo:
            obj['studentID'] = str(obj['studentID'])
