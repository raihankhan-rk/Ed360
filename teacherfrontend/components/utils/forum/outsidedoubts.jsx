import React from "react";
import { useState } from "react";

function Outsidedoubts(props){
    const [show, setShow] = useState(false);

    return <div className="bg-pale w-11/12 rounded-2xl border-l-[6px] mx-auto border-l-primary mb-5">
        
        <h2 className="font-[Montserrat] text-black font-semibold py-2 px-5 text-[1.3vw]">{props.subject}</h2>
        <p className="text-gray-400 font-[Montserrat] py-2 px-5">{props.doubt}</p>
        <p className="text-primary py-2 px-5 font-[Montserrat] inline-block text-[.9vw]">{props.date}</p>
        <p className="text-primary py-3 px-5 font-[Montserrat] inline-block text-[.9vw] float-right">{props.name}</p>
        
    </div>
}

export default Outsidedoubts;