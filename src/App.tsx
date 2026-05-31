import Hed from "./dev/hed"
import About from './dev/about'
import Footer from './dev/footer'
import Project_Gen from './dev/project/pro'
import Skills from "./exp/skills"
import { useState, useEffect } from "react"
export default function App() {
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
        <Hed></Hed>
        <br />
        <About></About>
        <br />
        <Project_Gen></Project_Gen>
        <br />
        {/* <express> */}
        <Skills></Skills>
        <br />
        <Footer></Footer>
      </div>
    </>
  )
}