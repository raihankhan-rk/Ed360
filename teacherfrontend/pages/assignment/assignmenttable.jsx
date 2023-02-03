import Table from "../../components/utils/table"
import Body from "../../components/Body";

function Asstable(){
    return <>
    {/* body wrapper */}
    <Body title="Assignment Table">
        <div className="w-11/12 mx-auto my-10">
            <h2 className="font-[Montserrat] font-medium text-[1.7vw]">COA Assignment</h2>
            <p><p className=" font-[Montserrat] text-[.9vw] font-light">10/10/22</p></p>
        </div>
        <div className="w-11/12 mx-auto">
            <Table title="Submissions:"/>
            </div>

    </Body>
  </>
}

export default Asstable;