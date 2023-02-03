import React, {useState} from 'react'
import Link from 'next/link'

export default function Sidebar() {
  const [active, setActive] = useState("");
  const selected="border-r-4";
  const common="border-accent w-full py-2 hover:border-r-4 hover:border-pale";
  return (
    <div className='flex flex-col justify-between h-[100vh] items-center w-full'>

      {/* logo & text */}
      <Link href={"/"}>
        <div className='m-5'>
          <svg  className='w-16 h-16 text-accent' id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1920"><defs></defs><rect fill='currentColor' y="259.58" width="1060.49" height="284.36" rx="52.38"/><rect fill='currentColor' y="828.58" width="1060.49" height="284.36" rx="52.38"/><rect fill='currentColor' y="1388.58" width="1060.49" height="284.36" rx="52.38"/><path fill='currentColor' d="M1920,960c0,393.35-320,713.37-713.37,713.37h-2.48v-.17h-.77a52.38,52.38,0,0,1-52.38-52.38V1433.59a52.38,52.38,0,0,1,52.38-52.38h.77V1381c.84,0,1.64,0,2.48,0,232.19,0,421.09-188.9,421.09-421.09,0-231.52-187.8-420-419.07-421.08-1.36.11-2.74.16-4.13.16a52.38,52.38,0,0,1-52.38-52.38V299.46a52.36,52.36,0,0,1,52-52.37v-.46h2.48C1600,246.63,1920,566.66,1920,960Z"/></svg>
          <h4 className='text-lg font-semibold text-accent font-[Montserrat]'>ED360</h4>
        </div>
      </Link>
      
      {/* nav elements */}
      <div className='w-full'>
        <ul className='flex flex-col font-[Montserrat]  text-white text-center text-base w-full'>
          <Link href={"/dashboard"}><li onClick={()=>setActive('dashboard')} className={`${active==='dashboard'? selected: ``} ${common}`}>Dashboard</li></Link>
          <Link href={"/attendanceform"}><li onClick={()=>setActive('attendance')} className={` ${active==='attendance'? selected: ``} ${common}`}>Attendance</li></Link>
          <Link href={"/assignment/assignments"}><li onClick={()=>setActive('assignment')} className={` ${active==='assignment'? selected: ``} ${common}`}>Assignment</li></Link>
          <Link href={"/forum"}><li onClick={()=>setActive('forum')} className={` ${active==='forum'? selected: ``} ${common}`}>Forum</li></Link>
          <Link href={"/notices"}><li onClick={()=>setActive('notice')} className={` ${active==='notice'? selected: ``} ${common}`}>Notice</li></Link>
          <Link href={"/certificates"}><li onClick={()=>setActive('certificates')} className={` ${active==='certificates'? selected: ``} ${common}`}>Certificates</li></Link>
        </ul>
      </div>

      {/* logout button */}
      <div className='mx-5 my-10'>
      <button
              type=""
              className="bg-accent rounded-full font-[Montserrat] text-base mx-auto text-white font-medium px-9 py-2">
              Logout
            </button>
      </div>
    </div>
  )
}
