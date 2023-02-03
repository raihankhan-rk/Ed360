import { Line, Circle } from 'rc-progress';

function AttDash(props){
    const high="#6ed849";
    const low= "#ff1919";
    const mid="#ffb342";


    return <div className="grid grid-flow-col grid-cols-3 items-center justify-between my-3">
        <div>
        <h3 className="font-[Montserrat] text-[1.2vw]  ml-8">Student Name</h3>
        </div>
        <div>
        <h3 className="font-[Montserrat] text-[1vw] font-semibold text-center">Present</h3>
        </div>
        <div className='w-10/12 flex h-2 items-center gap-3'>
            <Line percent={props.percent} strokeWidth={4} trailWidth={4} strokeColor={props.percent>=75? high: props.percent<75 && props.percent>=40? mid: low} />
            <h3 className="font-[Montserrat] text-[.8vw]">{props.percent}%</h3>
        </div>
        
    </div>
}

export default AttDash;