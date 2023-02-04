import React from "react";
import Body from "../../components/Layouts/Body";
import Input from "../../components/utils/input"

export const getStaticPaths = async() =>{
    const db = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await db.json();

    const paths = data.map(assignment =>{
        return{
            params: {assignmentID: assignment.id.toString()}
        }
    })

    return{
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.assignmentID;
    const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
    const data = await res.json();

    return{
        props: {assignment: data}
    }
}


const Assignment = () => {
    return <div>
        <Body title="Assignments">
            <div className="mx-auto bg-pale w-11/12 h-[200px] mt-8 rounded-xl">
                <h1 className="text-primary font-[Montserrat] mt-4 text-[3.6vw] px-4 py-2 font-semibold">Description and condition</h1>
                <p className="text-[3vw] font-[Montserrat] px-4">This is a assignment. You can use this if you are poor and are happy with a peasantly discount of 1 or 2%. I don't know how that even makes a difference but if it makes you happy then it's ok.</p>
            </div>
            <Input/>
        </Body>
    </div>
}

export default Assignment;

