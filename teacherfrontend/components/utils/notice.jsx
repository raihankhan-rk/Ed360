import Nodelete from "../textareanodelete";
import Textarea from "./textarea";
import React from "react";



function Notice(props){
    const resp = props.notice;
    console.log("noticesssss: ", resp);
    // complete array of notices is passed as props
    const noticeArray = resp || [];
    console.log("noticeArray: ", noticeArray);
    
    return <div className="w-11/12 mx-auto my-[2rem]">

        {/* mapping is done here */}
        {noticeArray.slice(0).reverse().map((notice) => (

            // each card
            <div key={notice.id} className="bg-pale text-lg rounded-2xl my-4 p-8">
                <p className="whitespace-pre-wrap my-2 font-[Montserrat] text-accent">{notice.data}</p>
                {notice.fileURL===null?null:<img className="w-4/12 my-2" src={notice.fileURL} alt="file" />}
                <h6 className="font-[Montserrat] text-primary">{notice.time} {notice.date}</h6>
            </div>
            ))}
        
    </div>
}

export default Notice;