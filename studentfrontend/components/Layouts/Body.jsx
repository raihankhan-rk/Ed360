import React from 'react'
import Coins from '../utils/Coins'
import Profile from '../utils/Profile'
import Menu from '../navbar/menu'

export default function Body(props) {
    
  return (
    <div className=''>
        <div className='flex flex-row justify-between mx-4 pt-4 mb-8'>
          <Profile/>
          <Coins className="justify-self-end"/>
        </div>

        <h1 className=' text-white text-3xl font-medium text-center my-4'>{props.title}</h1>

        <div className='pt-2 bg-white min-h-[100vh] rounded-t-3xl mb-[4.5rem]'>
            {props.children}
        </div>
        <Menu/>
    </div>
  )
}
