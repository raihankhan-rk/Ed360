import React from 'react'

export default function DashSec(props) {
  return (
    <div className=''>
        <h3 className='text-2xl m-5 font-[Montserrat] font-semibold pt-1 text-secondary'>{props.title}</h3>
        <div className='m-5  border-b-pale'>
            {props.children}
        </div>
    </div>
  )
}
