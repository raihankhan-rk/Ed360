import React,{useState, useEffect} from 'react'
import Body from '../components/Layouts/Body'
import NoticeCard from '../components/utils/notices/noticeCard'
import { MutatingDots } from 'react-loader-spinner';
import axios from 'axios';



export default function Notices() {

  const baseURL = "https://ed360-backend.vercel.app/api/teacher/noticeboard/";

  const [post, setPost] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const loadingHandle = (e)=>{
    setLoading(e);
  }


  useEffect(() => {
    loadingHandle(true);
    const getPostData = async () => {
      const {data: res} = await axios.get(baseURL);
      console.log("Post RES: ", res);
      setPost(res.notices);
      console.log("Response: ",res);
      loadingHandle(false);
    };
    getPostData();
  }, []);

  console.log({post})
  if (!post) return null;

  const notices = [
    {
      id: "1",
      title: "Notice-1",
      description: "This notice is for fools please dont react if you are not a fool",
      time: "20:14",
      teacher: "Teacher Name",
      image: "www.link.com/image"
    },
    {
      id: "2",
      title: "Notice-2",
      description: "This notice is for fools please dont react if you are not a fool",
      time: "20:26",
      teacher: "Teacher Name",
      image: "www.link.com/image"
    },
    {
      id: "3",
      title: "Notice-3",
      description: "This notice is for fools please dont react if you are not a fool",
      time: "20:35",
      teacher: "Teacher Name",
      image: "www.link.com/image"
    },
    {
      id: "4",
      title: "Notice-4",
      description: "This notice is for fools please dont react if you are not a fool",
      time: "20:40",
      teacher: "Teacher Name",
      image: "www.link.com/image"
    }
  ];

  return (
    <Body title="Notices">
      {/* {
        notices.map((notice)=>(
          <NoticeCard key={notice.id} title={notice.title} description={notice.description} image={notice.image} time={notice.time} teacher={notice.teacher}/>
        ))
      } */}
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
        {console.log("YAY: ", post)}
          <NoticeCard notice={post}/>
    </Body>
  )
}
