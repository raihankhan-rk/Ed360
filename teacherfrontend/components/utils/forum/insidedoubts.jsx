import {useState} from 'react';
import Image from 'next/image';

function Insidedoubts(props){
    
    return <div>
        <div className="w-11/12 bg-white mx-auto rounded-xl">
        <h2 className="font-[Montserrat] text-black font-semibold py-2 px-5 text-[1.3vw]">{props.subject}</h2>
        <img src={props.img} alt="hello" className='w-10'/>
        <p className="text-gray-400 font-[Montserrat] py-2 px-5">{props.doubt}</p>
        <p className="text-primary py-2 px-5 font-[Montserrat] inline-block text-[.9vw]">{props.date}</p>
        <p className="text-primary py-3 px-5 font-[Montserrat] inline-block text-[.9vw] float-right">{props.name}</p>
        </div>
    </div>
}

export default Insidedoubts;