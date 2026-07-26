import b from '../assets/2.png'
import c from '../assets/3.png'
export default function Footer() {
  return (
    <>
      <div className="  bg-[#2d2f9e56]  border-slate-500 font-bold p-2.5  gap-2.5  border rounded-2xl  ">
        <h2 >Salem Portfolio</h2>
        <section>
          <div className="flex  justify-center  items-center gap-10 mt-5">
            <a href="https://www.linkedin.com/in/ahemdgamalsalem/" rel="noopener noreferrer" target='__blank'><img className="hover:-translate-y-2 hover:scale-[1.02]  hover:shadow-2xl  transition-all duration-300 ease-out" src={b} width={40}></img>Linked IN</a>
            <a href="https://github.com/AGsalem" rel="noopener noreferrer" target='__blank'><img className="hover:-translate-y-2 hover:scale-[1.02]  hover:shadow-2xl  transition-all duration-300 ease-out" src={c} width={40}></img>GitHub</a>
            <a rel="noopener noreferrer" className='text-[#82f7ff] transition-all duration-300 ease-out  hover:text-amber-500' href='https://github.com/AGsalem/portfolio' target='__blank'>View Source Code</a>
          </div>
        </section>
        {/* الحقوق */}
        <footer className="flex align-middle justify-center items-center mt-5 mb-5">
          @جميع الحقوق محفوظة للمطور سالم &#169; 2026
        </footer>

      </div>
      <br />
    </>
  )
}