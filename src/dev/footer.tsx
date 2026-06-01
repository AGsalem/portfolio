import b from '../assets/2.png'
import c from '../assets/3.png'
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
            <a href="https://www.linkedin.com/in/ahemdgamalsalem/" rel="noopener noreferrer" target='__blank'><img className="hover:-translate-y-2 hover:scale-[1.02]  hover:shadow-2xl  transition-all duration-300 ease-out" src={b} width={40}></img>Linked IN</a>
          </div>
          <div >
            <a href="https://github.com/AGsalem" rel="noopener noreferrer" target='__blank'><img className="hover:-translate-y-2 hover:scale-[1.02]  hover:shadow-2xl  transition-all duration-300 ease-out" src={c} width={40}></img>GitHub</a>
          </div>
          <h6> <a rel="noopener noreferrer" className='text-[#82f7ff]' href='https://github.com/AGsalem/portfolio' target='__blank'>View Source Code</a></h6>
        </div>

        <footer className="flex align-middle justify-center items-center">


          @جميع الحقوق محفوظة للمطور سالم &#169; 2026
        </footer></div>



    </>
  )
}