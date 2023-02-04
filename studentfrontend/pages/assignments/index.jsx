import React from 'react'
import Body from '../../components/Layouts/Body'
import Asscomp from '../../components/utils/assignments/assignment'
import Link from 'next/link'

export const getStaticProps = async() => {
  const db = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await db.json();

  return{
    props: {assignment: data}
  }
}

export default function Assignments({assignment}) {
  return (
    <Body title="Assignments">
        <div className='flex flex-col'>
          {assignment.map((assignments)=>(
            <div key={assignments.id} className='grid grid-flow-col grid-cols-6'>
              <div className='mx-auto my-auto'>
                <h1 className='font-[Montserrat] text-gray-500 text-[3vw]'>10:30</h1>
                </div>
            <Link key={assignments.id} href={'/assignments/' + assignments.id} className="col-span-5 w-11/12  my-3 rounded-lg bg-pale">
            <Asscomp time="9:56" title={assignments.name} description={assignments.email} coins={assignments.id}/>
        </Link>
        </div>
          ))}
        {/* <Link href="/assignments/analogelectronics">
          <Assignment time="9:56" title="Analog Electronics" description="Find the attachment for assignment 4. The last date for submitting the hard copy of the" coins="20"/>
        </Link> */}
        </div>
    </Body>
  )
}
