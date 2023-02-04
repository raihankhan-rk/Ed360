import React, {useState, useEffect} from 'react'
import Body from '../../components/Body'
import CreateAssignment from '../../components/utils/CreateAssignment'
import Prevass from '../../components/prevassignment'
import axios from 'axios'
import { MutatingDots } from 'react-loader-spinner'



export default function Assignments({children}) {

//   const [isLoading, setLoading] = useState(false);
  
// const loadingHandle = (e)=>{
//   setLoading(e);
// }

// const loginURL='https://ed360-teacher-backend.vercel.app/api/auth/login/'

// useEffect(() => {
//   loadingHandle(true);
//   const getPostData = async () => {
//     const {data: res} = await axios.get(loginURL);
//     console.log("Login DATA: ", res);
//     loadingHandle(false);
//   };
//   getPostData();
// }, []);

  return (
    <>
    <Body title="Assignments">
    {/* {isLoading?
        <div className='flex items-center justify-center'>
          <MutatingDots 
            height="100"
            width="100"
            color="#6A72FA"
            secondaryColor= '#9999EE'
            radius='12.5'
            ariaLabel="mutating-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>: 
     */}
      <>
      <div className='p-8'>
        <CreateAssignment/>
      </div>
      
      <div className='px-8 py-2'>
        <Prevass/>
      </div>
      </>
  {/* } */}
    </Body>
    
  </>
  )
}
