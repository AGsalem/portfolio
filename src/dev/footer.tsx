import b from '../assets/2.png'
import c from  '../assets/3.png' 
export default function Footer() {
  return (
    <>
      <div className="  bg-[#2d2f9e56]  z-50 border-slate-700 font-bold p-2.5 text  gap-2.5  border rounded-2xl ">
    
    <div className="font-bold">
      <h2>Salem Portfolio</h2>
      </div>
        <div></div>
        <div className="flex align-middle justify items-center gap-10">

          <div></div>

          <div>
            <a href="https://www.linkedin.com/in/ahmed-gamal-5888573ab/" target='__blank'><img className="hover:-translate-y-2 hover:scale-[1.02]  hover:shadow-2xl  transition-all duration-300 ease-out" src={b} width={40}></img>Linked IN</a>
          </div>
          <div >
          <a href="https://github.com/AGsalem" target='__blank'><img  className="hover:-translate-y-2 hover:scale-[1.02]  hover:shadow-2xl  transition-all duration-300 ease-out" src={c}width={40}></img>GitHub</a></div>        </div>
        <footer className="flex align-middle justify-center items-center">


          @جميع الحقوق محفوظة للمطور سالم 2026
        </footer></div>



    </>
  )
}