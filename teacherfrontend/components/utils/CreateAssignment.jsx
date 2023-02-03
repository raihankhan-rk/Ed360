import React, {useState} from 'react'
import Textarea from './textarea';
import Nodelete from '../textareanodelete';

export default function () {
  const [image, setImage] = useState(null);
  const [showModal, setShowModal] = useState(false);
 

  const handleImageChange = (event) => {
    console.log(URL.createObjectURL(event.target.files[0]));
    setImage(URL.createObjectURL(event.target.files[0]));
  };
  return (
    <div>
      <h2 className='text-[2vw] font-medium font-[Montserrat]'>New Assignment</h2>
      <Nodelete question="Description"/>
    </div>
  )
}
