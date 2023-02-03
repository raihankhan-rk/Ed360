import React from 'react'
import Sidebar from '../Sidebar'

export default function Layout(props) {
  return (
    <div className='grid grid-cols-6 h-[100vh] absolute w-full overflow-clip '>
        <div>
            <Sidebar/>
        </div>
        <div className='col-span-5'>
            {props.children}
        </div>
        
    </div>
  )
}
