import { Route, Routes } from "react-router-dom"
import Error from "./component/error"
import Cer from "./certification/page"
import Home from "./component/page"
export default function App() {
  return (
    <>
      <Routes>
        {/* استعادة الملف الاساسي */}
        <Route path='/portfolio' element={<Home></Home>} />
        <Route path="/portfolio/certification" element={<Cer></Cer>}></Route>
        {/* لو المستخدم دور على صفحة مش موجودة */}
        <Route path="*" element={<Error/>} />
      </Routes>
    </>
  )
}