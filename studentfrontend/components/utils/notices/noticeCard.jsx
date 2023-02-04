import React from 'react'

export default function assignment(props) {
  return (

        <div className='bg-pale rounded-lg border-l-8 border-primary m-5 flex flex-col p-4 w-11/12'>
            <h2 className='text-accent font-semibold'>{props.title}</h2>
            <div className=''>
              {/* <img src={test_img} className="w-20" alt="" /> */}
              <div className='w-full h-80 bg-accent rounded-lg'></div>
            </div>
            <h2 className='text-sub text-sm my-4'>{props.description}</h2>
            <div className='flex flex-row justify-between items-center'>
              <h2 className='text-secondary text-sm '>{props.time}</h2>
              <h2 className='text-secondary text-sm'>{props.teacher}</h2>
            </div>
        </div>
  
  )
}
