import Pro_back from "./pro_back";
import Project_fro from "./pro_fro";
import DB from "./db";
function AHREF() {
    return (
        <>
            <div className="gap-2  flex-col font-bold">
                <a href="#Front" className="font-bold  text-red-400 "> Front </a>
                <a href="#Back" className=" font-bold  text-emerald-300 "> Back </a>
                <a href="#DB" className="font-bold   text-amber-500 "> DataBase</a>
            </div>
        </>
    )
}
export default function Project_Gen() {
    return (
        <>
            <div id='mywork' className="bg-[#4397b1ad]  align-middle justify-center items-center  rounded-2xl p-8">
                <h2>MY Project</h2>
                <AHREF />
                <br />
                <div id='Front' >
                    <Project_fro></Project_fro>
                </div>
                <br />
                <div id="Back">
                    <Pro_back></Pro_back>
                </div>
                <br />
                <div id="DB"></div>
                <DB></DB>
            </div>
        </>
    )
}