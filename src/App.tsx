import { Route, Routes } from "react-router-dom"
import Error from "./component/error"
import Cer from "./certification/page"
import Home from "./component/page"
import SHOW from "./dev/project/db/diagramShow"
import { Schema } from "./dev/project/db/diagramShow"
export default function App() {
  return (
    <>
      <Routes>
        {/* استعادة الملف الاساسي */}
        <Route path='/portfolio' element={<Home/>} />
        <Route path="/portfolio/certification" element={<Cer></Cer>}></Route>
        <Route path="/portfolio/diagram" element={<SHOW/>}></Route>
        <Route path="/portfolio/schema" element={<Schema/>}></Route>
        {/* لو المستخدم دور على صفحة مش موجودة */}
        <Route path="*" element={<Error/>} />
      </Routes>
    </>
  )
}