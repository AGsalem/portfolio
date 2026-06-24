import { useState } from "react"
function SCAL() {
    return <h3 className="font-black">↓</h3>
}
export default function Pro_back() {
    const [but, setBut] = useState(false)
    return (
        <>
            <div className="bg-[#4397b1c5] rounded-2xl p-1 ">
                <h2>Back_End</h2>
                <div className=" text-left bg-[rgba(33,52,130,0.8)] p-5 rounded-2xl flex justify-center items-center">
                    <div>
                        <h4>
                            post app api  back_end it's Express system
                        </h4>
                        <h3>
                            to see  app go <a target="__blank" className="text-teal-300  font-black transition hover:text-amber-300    duration-500   ease-in-out p-1.5  " href="https://post-app-api-rouge.vercel.app/">Post App Api</a>
                        </h3>
                        <br />
                        <button onClick={() => setBut(!but)} className="border border-amber-200 p-3.5 ml-20  bg-[#8D38C9]  rounded-2xl  "> Show Api Docs <SCAL></SCAL> </button>
                        { but && (
                            <h1 className="flex  items-center   justify-center" >حط الصور هنا 
                            </h1>
                        )}
                    </div>
                </div>
                <br></br>
            </div>
        </>
    )
}