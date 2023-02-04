import React from 'react'
import Body from '../components/Layouts/Body'
import NoticeCard from '../components/utils/notices/noticeCard'

export default function notices() {

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
      {
        notices.map((notice)=>(
          <NoticeCard key={notice.id} title={notice.title} description={notice.description} image={notice.image} time={notice.time} teacher={notice.teacher}/>
        ))
      }
    </Body>
  )
}
