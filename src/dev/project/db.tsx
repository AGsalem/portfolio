import { useState } from "react"
export default function DB() {
    const [a, setA] = useState(false)
    return (
        <>
            <div className="bg-[#4397b1c5] rounded-2xl p-1">
                <h1>Data Base</h1>
                <div className=" bg-[rgba(33,52,130,0.8)] p-5 rounded-2xl">
                    <a href="#DBDiagram" onClick={() => setA(!a)} className='text-xl font-bold text-teal-400 transition hover:text-amber-200 duration-500 ease-in-out '>Click to show ERD Diagram</a>
                    <div id='DBDiagram'>
                        {a && (
                            <>
                                <img src="" alt="صورة الرسم البياني لي القاعدة البيانات" />
                            </>)
                        }</div>
                    {/* حط  الصورة هنا  */}

                </div>
            </div>
        </>
    )
}