import { useState } from "react"
import Diagram from "./diagram"
import SQL from "./sql"
export default function DB() {
    const [a, setA] = useState(false)
    const [sql, setSql] = useState(false)
    const [Db, setdb] = useState(true)
    const [pic, setpic] = useState(true)
    return (
        <>
            <div className="bg-[#4397b1c5] rounded-2xl p-1">
                <h1>Data Base</h1>
                <br />
                <div className=" bg-[rgba(33,52,130,0.8)] p-5 rounded-2xl">
                    <h2> Post App DataBase</h2>
                    <button onClick={() => { setA(!a); setpic(!pic) }} className='text-xl mt-5 font-bold  text-teal-400 transition hover:text-amber-200  hover:active:scale-90  active:scale-90  hover:-translate-y-3 duration-500 ease-in-out  rounded-2xl '>
                        {pic ? "Show" : "Hide"} pictrue ERD Diagram</button>
                    <br />
                    {a && (
                        <>
                            <Diagram />
                        </>
                    )}
                    <br />
                    <button onClick={() => { setSql(!sql); setdb(!Db) }} className='text-xl font-bold text-teal-400 transition hover:text-amber-200  hover:active:scale-90
                     active:scale-90  hover:-translate-y-3 duration-500 ease-in-out  rounded-2xl '> {Db ? "Show" : "Hide"} SQL CODE</button>
                    <div>
                        {sql && (
                            <>
                                <SQL />
                            </>
                        )}
                    </div>
                    <div className="bg-cyan-300  h-3.5 w-full mt-3 rounded-4xl "></div>
                    <div className="mt-4">
                        <h2>Book App DataBase</h2>
                        <a href="https://agsalem.github.io/Book-App-Back/diagram.html" target="_blanck" className=" font-bold text-red-400  text-xl  "> Go To See Diagram</a>
                    </div>
                </div>
            </div>
        </>
    )
}