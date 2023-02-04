import React from 'react';
import Link from 'next/link';

const Input = () => {
  return (
    <div className='w-11/12 mt-3 flex flex-col container mx-auto bg-pale rounded-xl p-4'>
        <h2 className='text-lg text-primary font-semibold font-[Montserrat]'>Submit Assignment</h2>
        <textarea name="" id="" cols="20" rows="5" className='rounded-xl mt-2 w-full bg-white p-2 font-[Montserrat] text-[.8rem]' placeholder="Type Something..."></textarea>
        <Link href="/success">
          <button className='mt-2 self-end px-6 py-2 text-semibold bg-accent text-white rounded-full font-[Montserrat]'>Hand In</button>
        </Link>
    
    </div>
  )
}

export default Input;