export default function Hed() {
    return (
        <>
            <div className=" font-bold tracking-wider text-2xl t-2 rounded-3xl p-5 bg-[#138eb4ad]  items-center">
                <h2 className="">Salem Portfolio</h2>
            </div>
            <br />
            <div className="  bg-[#1E293B] z-50 p-5 font-bold rounded-3xl  justify-between items-center t-2">


                <div className="flex gap-5 transition-all duration-300 ease-out justify-between items-center ">
                    <div className="hover:-translate-y-1.5 hover:scale-[1.02]  hover:shadow-2xl  transition-all duration-500 ease-out ">
                        <a href="#about">AboutMe</a>
                    </div>
                    <div className="hover:-translate-y-1.5 hover:scale-[1.02]:  hover:shadow-2xl transition-all duration-500 ease-out">
                        <a href="#mywork">My Work</a>
                    </div>
                    <div className="hover:-translate-y-1.5 hover:scale-[1.02]:  hover:shadow-2xl transition-all duration-500 ease-out">
                        <a href="#skills">My Skills</a>
                    </div>
                    {/* دة الي جوة الصفحة لازم ياخدidمثال
                <div id=1>واستعيدة في اللينك  */}

                    {/* /hover:-translate-y-2 hover:scale-[1.02]:  hover:shadow-2xl*/}
                    <div className="hover:-translate-y-1.5 hover:scale-[1.02]  hover:shadow-2xl  transition-all duration-500 ease-out ">
                        <a className="transition-all duration-300 ease-out " href="https://github.com/AGsalem" rel="noopener noreferrer" target="blank">

                            GitHub
                        </a></div>
                    <div className="hover:-translate-y-1.5 hover:scale-[1.02]  hover:shadow-2xl  transition-all duration-500 ease-out ">
                        <div className="flex gap-1">

                            <a className="" href="https://www.linkedin.com/in/ahmed-gamal-5888573ab/" target="blank
                            "rel="noopener noreferrer">
                                Linked In

                            </a></div></div>
                </div>
            </div>
        </>
    )
}