import React from 'react'

export default function Body(props) {
  return (
    <div className='h-[100vh]'>
        <h1 className='text-pale font-medium font-[Montserrat] text-3xl my-5'>{props.title}</h1>
        <div className='bg-white mr-5 overflow-x-clip overflow-y-auto scrollbar-hide h-[88%] rounded-2xl'>
          <main>{props.children}</main>
        </div>
    </div>
  )
}
