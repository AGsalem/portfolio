import {Hed }from "../dev/hed"
import About from "../dev/about"
import Footer from "../dev/footer"
import Project_Gen from "../dev/project/pro"
import Skills from "../exp/skills"
import { useState } from "react"
import { useEffect } from "react"
import  CVV from "../dev/cv"
export default function Home() {
    const [cv, setcv] = useState(false)
    const [a, b] = useState(false)
    // عمل مؤقت
    useEffect(() => {
        const t = setTimeout(() => {
            b(true)
        }, 50)
        return () => clearTimeout(t)
    }, [])
    return (
        <>
            <div className={` transform transition-all duration-2500  ease-out  font-luxury
                ${a ? ' opacity-800 translate-y-0' : '  opacity-0  translate-y-5'}
                  `}>
                <br />
                {/* <Hed></Hed> */}
                <Hed setcv={setcv} />
                <br />
                <About></About>
                <br />
                <Project_Gen></Project_Gen>
                <br />
                {/*cv*/}
                <CVV cv={cv}></CVV>
                <br />
                {/* <express> */}
                <Skills></Skills>
                <br />
                <Footer></Footer>


            </div>
        </>
    )
}

// [{
	// "resource": "/f:/portfolio/src/component/page.tsx",
	// "owner": "typescript",
	// "code": "2322",
	// "severity": 8,
	// "message": "Type '{ setcv: Dispatch<SetStateAction<boolean>>; }' is not assignable to type 'IntrinsicAttributes'.\n  Property 'setcv' does not exist on type 'IntrinsicAttributes'.",
	// "source": "ts",
	// "startLineNumber": 25,
	// "startColumn": 22,
	// "endLineNumber": 25,
	// "endColumn": 27,
	// "modelVersionId": 55,
	// "origin": "extHost1"
// }]