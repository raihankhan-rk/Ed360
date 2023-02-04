import React from 'react'
import Body from '../components/Layouts/Body'
import Link from 'next/link'

export default function attendance() {
  return (
    <Body>
      <form className='m-5 p-2 text-xl'>
        <h3 className='text-2xl text-accent font-semibold'>Q1. Where is HTF3</h3>
        <input type="radio" name="fav_language" value="Kolkata"/>
        <label for="Kolkata" className='ml-2'>Kolkata</label><br/>
        <input type="radio" name="fav_language" value="Delhi"/>
        <label for="Delhi" className='ml-2'>Delhi</label><br/>
        <input type="radio" name="fav_language" value="Gandhinagar"/>
        <label for="Gandhinagar" className='ml-2'>Gandhinagar</label><br />
        <input type="radio" name="fav_language" value="Bihar"/>
        <label for="Bihar" className='ml-2'>Bihar</label><br />
      </form>

      <form className='m-5 p-2 text-xl'>
        <h3 className='text-2xl text-accent font-semibold'>Q2. Test Question</h3>
        <input type="radio" name="fav_language" value="Kolkata"/>
        <label for="Kolkata" className='ml-2'>1</label><br/>
        <input type="radio" name="fav_language" value="Delhi"/>
        <label for="Delhi" className='ml-2'>2</label><br/>
        <input type="radio" name="fav_language" value="Gandhinagar"/>
        <label for="Gandhinagar" className='ml-2'>3</label><br />
        <input type="radio" name="fav_language" value="Bihar"/>
        <label for="Bihar" className='ml-2'>4</label><br />
      </form>

      <div className='flex justify-center items-center'>
        <Link href="/success">
          <button type='submit' className='p-2 px-4 text-xl container mx-auto w-32 bg-primary text-white font-semibold rounded-full'>Submit</button>
        </Link>
      </div>
    </Body>
  )
}
