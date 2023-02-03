import React from "react";
import AttDash from "./attendancedash";


function Atttable(props){
    return <div className="bg-primary rounded-3xl my-4 pt-4 pb-2">
        <h2 className="font-[Montserrat] text-[1.7vw] font-medium text-white px-[2rem]">{props.title}</h2>
        <div className="bg-white  rounded-3xl my-6 py-5 w-[95%] mx-auto flex flex-col">
            <AttDash percent="76"/>
            <AttDash percent="23"/>
            <AttDash percent="56"/>
            <AttDash percent="87"/>
            <AttDash percent="45"/>
            <AttDash percent="76"/>
            <AttDash percent="23"/>
            <AttDash percent="56"/>
            <AttDash percent="87"/>
            <AttDash percent="45"/>
            <AttDash percent="76"/>
            <AttDash percent="23"/>
            <AttDash percent="56"/>
            <AttDash percent="87"/>
            <AttDash percent="45"/>
        </div>
    </div>
}

export default Atttable;