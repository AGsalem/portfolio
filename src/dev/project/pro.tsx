import Pro_back from "./pro_back";
import Project_fro from "./pro_fro";

export default function Project_Gen(){
    return(
        <>
        <div id='mywork' className="bg-[#4397b1ad]  align-middle justify-center items-center  rounded-2xl p-8">
        <h2>MY Project</h2>
        
        <Project_fro></Project_fro>
        <br></br>
        <Pro_back></Pro_back>
        
        </div>
        </>
    )
}