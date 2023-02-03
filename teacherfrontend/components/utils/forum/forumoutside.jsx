import React from "react";
import Outsidedoubts from "./outsidedoubts";
import { useState } from "react";
import Foruminside from "./foruminside";

function Forumoutside(props){

    return (<div className="overflow-scroll">
        <h2 className="font-[Montserrat] text-primary font-semibold text-[2vw] text-center py-5">Doubts</h2>
        <div>
            {props.children}
        </div>
        
        
    </div>)
}

export default Forumoutside;