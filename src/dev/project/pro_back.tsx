import { useState } from "react"
import Docs from "./docs"
function SCAL() {
    return <h3 className="font-black inline-block ml-1">↓</h3>
}
export default function Pro_back() {
    const [but, setBut] = useState(false)
    const [show, hide] = useState(true)
    return (
        <>
            <div className="bg-[#4397b1c5] rounded-2xl p-1  ">
                <h2>Back_End</h2>
                <div className="bg-[rgba(33,52,130,0.8)] p-5 rounded-2xl flex  flex-col justify-center items-center">
                    <div >
                        <h3 className="font-bold text-xl mt-5 mb-4">Post App API</h3>
                        <h4 className="font-bold">
                            post app api  back_end it's Express system
                            <h3><br /><a className="text-fuchsia-400   " target='_blanck' href="https://github.com/agsalem/post_app_api">Source Code Post App API  </a></h3>
                            <br />
                            <h4>
                                to see  app go <a target="__blank" className="text-teal-300  font-black transition hover:text-amber-300    duration-500   ease-in-out p-1.5  " href="https://post-app-api-rouge.vercel.app/">Post App Api</a>
                            </h4>
                        </h4>
                        <br />
                        <a href='https://agsalem.github.io/post_app_api/' className="font-bold mt-5">See docs on github</a>
                        <br />
                        <button onClick={() => { setBut(!but); hide(!show) }} className="mt-4 justify-center items-center border-amber-200 p-3.5 hover:scale-[1.02] hover:text-cyan-200 active:scale-90  hover:-translate-y-3 duration-500 ease-in-out text-2xl  bg-[#8D38C9]  rounded-2xl  "> {show ? "Show" : "Hide"} Api Docs <SCAL></SCAL> </button>
                        <br />
                        {but && (
                            <Docs></Docs>
                        )}
                    </div>
                    <div className="bg-cyan-400  h-3.5 w-full mt-3 rounded-4xl "></div>
                    <div  >
                        <h3 className="mt-3 text-2xl font-bold mb-3">
                            Book_App_Back
                        </h3>
                        <h3 className="font-bold">Api System too buy|sell Books</h3>
                        <br></br>
                        <a href="https://github.com/AGsalem/Book-App-Back" target="_blanck" className='text-xl   font-bold text-lime-400'>Source Code</a>
                        <br />
                        {/* <h4 className="mt-3 ">
                            to see  app go <a target="__blank" className="text-teal-300  font-black transition hover:text-amber-300    duration-500   ease-in-out p-1.5  " href="https://post-app-api-rouge.vercel.app/">Post App Api</a>
                        </h4> */}
                        <a href="https://agsalem.github.io/Book-App-Back/" target="_blanck" className='text-xl my font-bold text-lime-400'> Go docs For project </a>

                    </div>
                </div>
                <br></br>
            </div>
        </>
    )
}