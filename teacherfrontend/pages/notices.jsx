import React,{useEffect} from 'react'
import Body from '../components/Body'
import Notice from '../components/utils/notice'
import Nodelete from '../components/textareanodelete'
import axios from "axios";
import { useState } from 'react';

import loader from '../assets/loader.gif';
import { MutatingDots } from 'react-loader-spinner';

const baseURL = "https://ed360-backend.vercel.app/api/teacher/noticeboard/";

export default function Notices() {
  const [post, setPost] = useState([]);
  const [isLoading, setLoading] = useState(false);
  
  const loadingHandle = (e)=>{
    setLoading(e);
  }

  useEffect(() => {
    loadingHandle(true);
    const getPostData = async () => {
      const {data: res} = await axios.get(baseURL);
      setPost(res);
      console.log(res);
      loadingHandle(false);
    };
    getPostData();
  }, []);

  const updatePost = (newPost) => {
    console.log("function call working: ", newPost);
    setPost([...post, newPost]);
    loadingHandle(false);
  }


console.log({post})
  if (!post) return null;

  return (
    <>
      {/* body wrapper */}
      {console.log("post array before render: ",post)}
      <Body title="Notices">
        <div className='w-11/12 mx-auto'>
          <Nodelete func={updatePost} load={loadingHandle} question="Create a Notice"/>
        </div>
        <h2 className='text-[2vw] text-primary font-medium font-[Montserrat] mt-[4rem] ml-[3rem] mb-[2rem]'>Notices</h2>
        
        {isLoading?
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
        </div>: null}
        
          <Notice notice={post}/>
            {/* <Notice notice="Kal se tum logo ka prayer hoyenga aur sab 9:10 ke pehle andar chahiye. Jo nhi ayega wo maadarchod Kal se tum logo ka prayer hoyenga aur sab 9:10 ke pehle andar chahiye. Jo nhi ayega wo maadarchod

            Regards Bhosdiwala" date="12/02/23" time="10:50"/>
            <Notice notice="Kal se tum logo ka prayer hoyenga aur sab 9:10 ke pehle andar chahiye. Jo nhi ayega wo maadarchod Kal se tum logo ka prayer hoyenga aur sab 9:10 ke pehle andar chahiye. Jo nhi ayega wo maadarchod

            Regards Bhosdiwala" date="12/02/23" time="10:50"/> */}
      </Body>
    </>
  )
}
