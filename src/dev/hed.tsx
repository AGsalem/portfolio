export default function Hed() {
    return (
        <>
            <div className="   bg-[#1E293B]  z-50 border-slate-700 font-bold p-2.5   flex gap-2.5 backdrop-blur-2xl border rounded-3xl justify-between items-center t-2">
                <div className=" font-bold tracking-wider text-2xl t-2">
                    <h2 className="">Salem</h2>
                </div>

                <div className="flex gap-5 transition-all duration-300 ease-out ">
                    <div className="hover:-translate-y-2 hover:scale-[1.02]  hover:shadow-2xl  transition-all duration-300 ease-out ">
                        <a href="#about">About Me</a>
                    </div>
                    <div className="hover:-translate-y-2 hover:scale-[1.02]:  hover:shadow-2xl transition-all duration-300 ease-out">
                        <a href="#mypro">Projects</a>
                    </div>
                    {/* دة الي جوة الصفحة لازم ياخدidمثال
                <div id=1>واستعيدة في اللينك  */}

                    {/* /hover:-translate-y-2 hover:scale-[1.02]:  hover:shadow-2xl*/}
                    <div className="hover:-translate-y-2 hover:scale-[1.02]  hover:shadow-2xl  transition-all duration-300 ease-out ">
                        <a className="transition-all duration-300 ease-out " href="https://github.com/AGsalem" target="blank">

                            GitHub
                        </a></div>
                    <div className="hover:-translate-y-2 hover:scale-[1.02]  hover:shadow-2xl  transition-all duration-300 ease-out ">
                        <div className="flex gap-1">

                            <a className="" href="https://www.linkedin.com/in/ahmed-gamal-5888573ab/" target="blank">
                                Linked In

                            </a></div></div>
                </div>
            </div>
        </>
    )
}