import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const baseURL = "https://ed360-student-backend.vercel.app/api/apyHub/getAttendanceChart/"

export default function AttendanceMeter(props) {
  const [link,setLink] = useState("");
  
  // const [post, setPost] = useState([]);
  useEffect(() => {
    axios.post(baseURL, {
      present: 80,
      absent: 20
    }).then((response) => {
      console.log("Backend Data:", response.data);
      setLink(response.data)
      response
    }, (error) => {
      console.log(error);
    });
  }, []);

  return (<div className='pb-20 w-10/12 mx-auto text-center flex justify-center items-center'>
    <img src={link.data} alt="dfgh" className="w-11/12"/>
    </div>
  )
}
