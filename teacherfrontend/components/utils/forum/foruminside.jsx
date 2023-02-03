import React from "react";
import Insidedoubts from "./insidedoubts";
import Insideanswers from "./insideanswers";

function Foruminside(props){
    console.log("Props:",props);
    return (<div className="overflow-scroll">
        <h2 className="font-[Montserrat] text-primary font-semibold text-[2vw] text-center py-5">Doubt-{props.doubtData.id}</h2>
        <div className="mb-10">
        <Insidedoubts subject={props.doubtData.subject} doubt={props.doubtData.doubt}
        date={props.doubtData.date} name={props.doubtData.name} img={props.doubtData.img}/>

        {props.doubtData.answers.map((ans) => (
              <Insideanswers key={ans.aid} name={ans.name} answer={ans.answer} date={ans.date} img={ans.img} />
            ))}
        </div>
        
    </div>)
}

export default Foruminside;