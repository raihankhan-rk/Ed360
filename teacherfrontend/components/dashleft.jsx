import { Line, Circle } from 'rc-progress';
import Table from "../components/utils/table"

function Dashleft(props){
    const high="#6ed849";
    const low= "#ff1919";
    const mid="#ffb342";
    return <div className='text-center'>
        <div className="mt-6">
            <h2 className="font-[Montserrat] text-[1.3rem]">Good Afternoon</h2>
            <h3 className="font-[Montserrat]">Prof. Dibakar Roy Chowdhury</h3>
        </div>
        <div className='  bg-pale rounded-2xl py-10 mt-3 flex items-center justify-center shadow-xl'>
            <Circle percent={props.percent2} strokeWidth={5} trailWidth={5} trailColor='#ffffff' className='w-4/12' strokeColor={props.percent2>=75? high: props.percent2<75 && props.percent2>=40? mid: low} />
            <h3 className="font-[Montserrat] text-[2vw] font-semibold flex items-center ml-10">{props.percent2}%</h3>
        </div>
        <div>
            <Table title="Latest Submissions"/>
        </div>
    </div>
}

export default Dashleft;