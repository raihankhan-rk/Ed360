import React from "react";
import Body from '../../components/Layouts/Body'
import Doubts from "../../components/utils/forum/doubts";
import Link from "next/link";

export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    
    // const Coupons = [
    //     {id:"343g87", name:"Tesla", description:"Some writing here"},
    //     {id:"123b68", name:"Google", description:"Some writing here new"},
    //     {id:"563f69", name:"Microsoft", description:"Some writing here new waaao"}
    // ];

    return {
        props: { doubt: data }
    }


}

function Forum({doubt}){
    return(
        <Body title="Forum">
            {doubt.map((d) => (
            <Link key={d.id} href={"/forum/"+ d.id} className="w-full">
            <Doubts title={d.name} description={d.email} time="03:00" student="Risavdeb Patra"/>
            </Link>))}
        </Body>)
    
}

export default Forum;