import React from "react"
import Link from 'next/link'

function Primarybutt(props){
    return (
        <div className="pt-8 mx-auto ">
            <button className=" bg-primary w-[12vw] h-[4rem] rounded-full text-white font-medium text-[1.2vw] font-[Montserrat]"><Link href={"/dashboard"}>{props.button}</Link></button>
        </div>
    )}

export default Primarybutt;