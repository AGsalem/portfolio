import a from '../assets/2.png'
export default function About() {
    return (
        <>
            <div id="about" className="bg-[#3639cebd] rounded-3xl font-bold p-5 t-3   flex justify-between  flex-col      ">
                <div className=" justify-between " >

                    <div className="flex justify-between  flex-col  ">
                        <h1>About Me</h1>

                    </div>

                    <div className="top-5 flex  justify-between  gap-3.5">
                        <img src={a} alt="a"  width={200}/>
                        <div className=" text-xl   pr-9 text-left font-bold">
                            <h1>
 I'm  Ahmed Gamal Salem Full stack Developer
                            </h1>
                        </div>
                    </div>
                    <br></br>

                </div>

            </div>
        </>
    )
}