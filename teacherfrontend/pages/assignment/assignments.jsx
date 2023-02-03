import React from 'react'
import Body from '../../components/Body'
import Table from '../../components/utils/table'
import CreateAssignment from '../../components/utils/CreateAssignment'
import Prevass from '../../components/prevassignment'

export default function Assignments({children}) {
  return (
    <>
    {/* body wrapper */}
    <Body title="Assignments">

      <div className='p-8'>
        <CreateAssignment/>
      </div>

      <div className='px-8 py-2'>
        <Prevass/>
      </div>

    </Body>
  </>
  )
}
