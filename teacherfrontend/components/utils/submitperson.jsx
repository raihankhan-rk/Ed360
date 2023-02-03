import React from "react";
import Link from "next/link";

function Subperson(props){
    return <div className="w-[95%] mx-auto h-[5vw]">
        <h3 className="font-[Montserrat] text-black text-[1.3vw] ml-5 flex relative top-[1.4vw]">{props.name}</h3>
        <div>
            <Link href={"/assignment/student"}>
        <button className="float-right bg-primary rounded-2xl h-[3.4vw] w-[7vw] relative bottom-[1.2vw]  mr-5 font-[Montserrat] text-white text-[1.2vw]">Check</button>
        </Link>
        </div>
        
    </div>
}

export default Subperson;