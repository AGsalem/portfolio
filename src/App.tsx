import Hed from "./dev/hed"
import About from './dev/about'
import Footer from './dev/footer'
import Project_Gen from './dev/project/pro'
import { useState, useEffect } from "react"
import Expers from "./dev/exp/express"
export default function App() {
  const [a, b] = useState(false)
  useEffect(() => {
    // عملنا تايمر صغير جداً علشان نضمن المتصفح لقط الحالة الأولى وهي مخفية
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
        {/* <div className={`${a ? "opacity-100  translate-y-5" : "opacity-0 translate-y-10"}`}> */}
        <Hed></Hed>
        <br />
        <About></About>
        <br />
        <Project_Gen></Project_Gen>
        <br />
        {/* <express> */}
        <Expers></Expers>
        <br />
        <Footer></Footer>
      </div>
    </>
  )
}