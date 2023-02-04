import React from 'react'
import Body from '../../components/Body'
import CreateAssignment from '../../components/utils/CreateAssignment'
import Prevass from '../../components/prevassignment'

export default function Assignments({children}) {
  return (
    <>
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
