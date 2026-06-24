export const Hed = ({ setcv }: { setcv: (value: boolean) => void })=> {
    return (
        <>
            <div className=" font-bold text-2xl t-2 rounded-3xl p-5 bg-[#138eb4ad]  ">
                <h2 className="">Salem Portfolio</h2>
            </div>
            <br />
            <div className="  bg-[#1E293B] flex p-5 font-bold rounded-3xl   gap-2 justify-center items-center ">
                <div className="flex transition-all duration-300 ease-out justify-between items-center  gap-5">
                    <div className="hover:-translate-y-1.5 hover:scale-[1.02]  hover:shadow-2xl  transition-all duration-500 ease-out ">
                        <a href="#about">About</a>
                    </div>
                    <div className="hover:-translate-y-1.5 hover:scale-[1.02]:  hover:shadow-2xl transition-all duration-500 ease-out">
                        <a href="#mywork">Work</a>
                    </div>
                    <div className="hover:-translate-y-1.5 hover:scale-[1.02]:  hover:shadow-2xl transition-all duration-500 ease-out">
                        <a href="#skills">Skills</a>
                    </div>
                    <a onClick={() => setcv(true)}
                        className="hover:-translate-y-1.5 hover:scale-[1.02]:  hover:shadow-2xl transition-all duration-500 ease-out"
                        href="#CV">CV</a>

                    {/* دة الي جوة الصفحة لازم ياخدidمثال
                <div id=1>واستعيدة في اللينك  */}

                    {/* /hover:-translate-y-2 hover:scale-[1.02]:  hover:shadow-2xl*/}
                    <div className="hover:-translate-y-1.5 hover:scale-[1.02]  hover:shadow-2xl  transition-all duration-500 ease-out ">
                        <a className="transition-all duration-300 ease-out " href="https://github.com/AGsalem" rel="noopener noreferrer" target="blank">
                            GitHub
                        </a></div>
                    <div className="hover:-translate-y-1.5 hover:scale-[1.02]  hover:shadow-2xl  transition-all duration-500 ease-out ">
                        <div className="flex ">
                            <a className="" href="https://www.linkedin.com/in/ahemdgamalsalem/" target="blank
                            "rel="noopener noreferrer">
                                LinkedIn
                            </a></div></div>
                </div>
            </div>
        </>
    )
}