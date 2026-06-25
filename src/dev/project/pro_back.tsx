import { useState } from "react"
import Docs from "./docs"
function SCAL() {
    return <h3 className="font-black inline-block ml-1">↓</h3>
}
export default function Pro_back() {
    const [but, setBut] = useState(false)
    return (
        <>
            <div className="bg-[#4397b1c5] rounded-2xl p-1  ">
                <h2>Back_End</h2>
                <div className="bg-[rgba(33,52,130,0.8)] p-5 rounded-2xl flex  flex-col justify-center items-center">
                    <div >
                        <br />
                        <h4 className="font-bold">
                            post app api  back_end it's Express system
                        
                        <h4><br/>
                            to see  app go <a target="__blank" className="text-teal-300  font-black transition hover:text-amber-300    duration-500   ease-in-out p-1.5  " href="https://post-app-api-rouge.vercel.app/">Post App Api</a>
                        </h4></h4>
                        <br />
                        <button onClick={() => setBut(!but)} className="justify-center items-center border-amber-200 p-3.5 hover:scale-[1.02] hover:text-cyan-200 active:scale-90  hover:-translate-y-3 duration-500 ease-in-out text-2xl  bg-[#8D38C9]  rounded-2xl  "> Show Api Docs <SCAL></SCAL> </button>
                        <br />
                        {but && (
                            <>
                            <br />
                                <Docs></Docs>
                            </>
                        )}
                    </div>
                </div>
                <br></br>
            </div>
        </>
    )
}