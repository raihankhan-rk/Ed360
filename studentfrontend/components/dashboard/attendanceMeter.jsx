import React from 'react'
import {Circle, Line } from 'rc-progress'


export default function AttendanceMeter(props) {
  const high="#6ed849";
  const low= "#ff1919";
  const mid="#ffb342";
  return (<div className='pb-20 w-10/12 mx-auto text-center'>
    <Line percent={props.percent} strokeWidth={4} trailWidth={4} strokeColor={props.percent>=75? high: props.percent<75 && props.percent>=40? mid: low} />
    <h2 className='font-[Montserrat] font-medium text-xl mt-2'>{props.percent}%</h2>
    </div>
  )
}
