import React from 'react'
import Body from '../components/Body'
import Atttable from '../components/atttable'
import Dashleft from '../components/dashleft'

export default function Dashboard({children}) {
  return (
    <div className=''>
      {/* body wrapper */}
      <Body title="Dashboard">
        <div className='grid grid-flow-cols grid-cols-5'>
          <div className="col-span-2 mx-auto">
            <Dashleft percent2="23"/>
          </div>
          <div className='col-span-3 w-11/12 mx-auto'>
            <Atttable title="Attendance " />
          </div>

        </div>
      </Body>
    </div>
  )
}
