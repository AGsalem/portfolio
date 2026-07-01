import db from "../../assets/docs/design.avif"
import admin from '../../assets/docs/admin.avif'
import users from '../../assets/docs/users.avif'
import posts from '../../assets/docs/posts.avif'
import { useState } from "react"
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
                    <button onClick={() => { setA(!a); setpic(!pic) }} className='text-xl font-bold  text-teal-400 transition hover:text-amber-200  hover:active:scale-90  active:scale-90  hover:-translate-y-3 duration-500 ease-in-out  rounded-2xl '>
                        {pic ? "Show" : "Hide"} pictrue ERD Diagram</button>
                    <br />
                    {a && (
                        <>
                            <div >
                                <div className="rounded-2xl flex align-middle justify-center items-center ">
                                    <img src={db} className="rounded-2xl flex align-middle justify-center items-center" alt="صورة الرسم البياني لي القاعدة البيانات" />
                                </div>
                            </div>
                        </>

                    )}
                    <br />
                    <button onClick={() => { setSql(!sql); setdb(!Db) }} className='text-xl font-bold text-teal-400 transition hover:text-amber-200  hover:active:scale-90  
                     active:scale-90  hover:-translate-y-3 duration-500 ease-in-out  rounded-2xl '> {Db ? "Show" : "Hide"} SQL CODE</button>
                    <div>
                        <br />
                        {sql && (
                            <>
                                <h2> Table Admin</h2>
                                <br />
                                <div className="flex items-center justify-center">
                                    <img src={admin} alt="sql" className=' rounded-3xl' />
                                    <br />
                                </div>
                                <br />
                                <h2>Table Users </h2>
                                <br />
                                <div className="flex items-center justify-center">
                                    <img src={users} alt="sql" className=' rounded-3xl' />
                                    <br />
                                </div>
                                <br />
                                <h2>Table Posts </h2>
                                <div className="flex items-center justify-center">
                                    <img src={posts} alt="sql" className=' rounded-3xl' />
                                    <br />
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}