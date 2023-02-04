import React from 'react'

export default function Layout(props) {
  return (
    <div className='bg-primary'>
        {props.children}
    </div>
  )
}