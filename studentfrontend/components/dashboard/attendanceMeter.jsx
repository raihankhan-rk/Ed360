import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import Image from 'next/image'

const baseURL = "https://ed360-student-backend.vercel.app/api/student/apyhub/"

export default function AttendanceMeter(props) {
  
  // const [post, setPost] = useState([]);

  axios.post(baseURL, {
    present: '10',
    absent: '90'
  }).then((response) => {
    console.log(response.data);
  }, (error) => {
    console.log(error);
  });

  return (<div className='pb-20 w-10/12 mx-auto text-center'>
    {/* <Image src={res} className="w-4/12"></Image> */}
    </div>
  )
}
