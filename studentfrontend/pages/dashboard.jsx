import React from 'react'
import Body from '../components/Layouts/Body'
import Routine from '../components/dashboard/routine'
import DashSec from '../components/Layouts/DashSec'
import AttendanceMeter from '../components/dashboard/attendanceMeter'

export default function Dashboard() {

  return (
    <Body title="Hi, Sayak">
        <DashSec title="Upcoming Classes">
          <Routine />
        </DashSec>
        <DashSec title="Attendance">
        <AttendanceMeter percent="78"/>
        </DashSec>
    </Body>
  )
}
