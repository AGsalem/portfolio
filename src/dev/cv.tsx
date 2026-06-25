import { useState } from "react"
interface AV {
    cv: boolean
}
export default function CVV({ cv }: AV) {
    const [seeCVInWEB, setSee] = useState(false)
    // const [install, setInstall] = useState(false)
    return (
        <>
            <div id="CV">
                {cv && (
                    <div className="bg-blue-950 p-16 rounded-4xl font-bold">
                        <div className="text-cyan-500 duration-150 ease-in-out text-2xl ">
                            <button onClick={() => setSee(!seeCVInWEB)} > Click To Show My CV</button>
                        </div>
                        <br />
                        {seeCVInWEB && (
                            <div>
                            
                            <div className="flex items-center justify-center rounded-3xl">
                          fdgsdfgfdgdf
                            </div>
                            </div>
                            )}
                        <div className="hover:-translate-1.5  text-2xl hover:scale-[1.02]:  hover: text-blue-400 rounded-2xl p-1.5 transition-all duration-500 ease-out">
                            <a href="" download >Dawnload CV</a>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}