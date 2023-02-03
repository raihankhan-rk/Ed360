import React from "react";
import Subperson from "./submitperson";


function Table(props){
    return <div className="bg-primary rounded-3xl my-4 pt-4 pb-2">
        <h2 className="font-[Montserrat] text-[1.7vw] font-medium text-white px-[2rem]">{props.title}</h2>
        <div className="bg-white rounded-3xl my-6 py-5 w-[95%] mx-auto flex flex-col divide-y">
            <Subperson name="Risavdeb Patra"/>
            <Subperson name="Sayak Sarkar"/>
            <Subperson name="Aritra Roy"/>
            <Subperson name="Raihan Khan"/>
            <Subperson name="Risavdeb Patra"/>
            
        </div>
    </div>
}

export default Table;