import React from "react";
import Body from "../../components/Layouts/Body";
import Doubts from "../../components/utils/forum/doubts";
import Answers from "../../components/utils/forum/answers"

export const getStaticPaths = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    // const doubts = [
    //     {id:"343g87", name:"Tesla", description:"Some writing here"},
    //     {id:"123b68", name:"Google", description:"Some writing here new"},
    //     {id:"563f69", name:"Microsoft", description:"Some writing here new waaao"}
    // ];

    const paths = data.map(doubt => {
        return{
            params: {doubtID: doubt.id.toString()}
        }
    })
    console.log(paths);
    return{
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.doubtID;
    const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
    const data = await res.json();

    return{
        props: {doubt: data}
    }
}

const Answer = ({doubt}) => {
    return <Body title="Forum">
        <Doubts title={doubt.name} description={doubt.email} time="03:00" student="Risavdeb Patra"/>
        <Answers title={doubt.name} description={doubt.email} time="03:00" student="Risavdeb Patra"/>
    </Body>;
}

export default Answer;