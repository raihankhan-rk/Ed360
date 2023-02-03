import React from "react";
import Link from 'next/link'

function Prevass(){
    return <div className="">
        <h1 className="text-[2vw] font-medium font-[Montserrat]">Previous Assignments</h1>
        <div className="grid grid-flow-col grid-cols-2 gap-8">
            <Link href={"/assignment/assignmenttable"}>
            <div className="bg-pale rounded-3xl px-8 py-3">
            {/* Assignment Name */}
                <h2 className="text-[1.5vw] font-medium font-[Montserrat] px-6 mt-8">COA Assignment</h2> 
                {/* Date  */}
                <p className="px-6 font-[Montserrat] text-[.9vw] font-light">10/10/22</p>

                <h3 className="text-[1.2vw] font-medium font-[Montserrat] px-6 mt-7">Submissions:</h3>
                <ol className="text-[.9vw] list-decimal font-medium font-[Montserrat] px-10 mt-7">
                    <li>Risavdeb Patra</li>
                    <li>Sayak Sarkar</li>
                    <li>Aritra Roy</li>
                    <li>Raihan Khan</li>
                    <li>Sampurna Bhadury</li>
                </ol>
            </div>
            </Link>

            <div className="bg-pale rounded-3xl px-8 py-3">
                {/* Assignment Name */}
                <h2 className="text-[1.5vw] font-medium font-[Montserrat] px-6 mt-8">COA Assignment</h2> 
                {/* Date  */}
                <p className="px-6 font-[Montserrat] text-[.9vw] font-light">10/10/22</p>

                <h3 className="text-[1.2vw] font-medium font-[Montserrat] px-6 mt-7">Submissions:</h3>
                <ol className="text-[.9vw] list-decimal font-medium font-[Montserrat] px-10 mt-7">
                    <li>Risavdeb Patra</li>
                    <li>Sayak Sarkar</li>
                    <li>Aritra Roy</li>
                    <li>Raihan Khan</li>
                    <li>Sampurna Bhadury</li>
                </ol>
            </div>

        </div>
    </div>
}

export default Prevass;