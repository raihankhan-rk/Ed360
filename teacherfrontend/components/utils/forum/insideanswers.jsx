

function Insideanswers(props){
    return <div>
        <div className="w-11/12 mx-autorounded-xl">
            <div className="grid grid-flow-cols grid-cols-3 w-11/12 ml-[5.5rem]">
                <div className="col-span-1">
                    <h1></h1>
                </div>
                <div className="col-span-2 bg-white rounded-2xl mt-8">
                    <h2 className="font-[Montserrat] text-primary font-semibold py-2 px-5 text-[1vw]">{props.name}</h2>
                    <div className="w-11/12 h-[10rem] bg-red-100 mx-auto rounded-lg"></div>
                    <p className="text-gray-400 font-[Montserrat] py-2 px-5">{props.answer}</p>
                    <p className="text-primary py-2 px-5 font-[Montserrat] inline-block text-[.9vw]">{props.date}</p>
                    <button className="bg-primary w-[6vw] h-[2rem] font-[Montserrat] text-white rounded-xl float-right mr-6 mb-4">Verify</button>
                </div>
                </div>
            </div>
    </div>
}

export default Insideanswers;