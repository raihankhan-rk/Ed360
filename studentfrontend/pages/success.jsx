import React from 'react'
import Body from '../components/Layouts/Body'
import Link from 'next/link'

export default function Success() {
  return (
    <Body title="Success">
            <h2 className='text-4xl font-bold text-primary text-center mt-48 mb-20'>Yay! Submitted Successfully</h2>
            <div className='flex justify-center items-center'>
        <Link href="/dashboard">
          <button type='submit' className='p-2 px-4 text-xl container mx-auto w-52 bg-primary text-white font-semibold rounded-full'>Go Back to Dashboard</button>
        </Link>
      </div>
    </Body>
  )
}
