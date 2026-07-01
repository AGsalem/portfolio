import a from '../assets/2.png'
// import './img.css'
export default function About() {
    return (
        <>
            <div id="about" className="bg-[#3639cebd] rounded-3xl font-bold p-5 t-3   flex justify-between  flex-col">
                <div className=" justify-between " >
                    <div className="flex justify-between  flex-col "><h1>About Me</h1></div>
                    <img className="b top-5  gap-3.5 w-45 md:w-auto h-auto object-contain" src={a} alt="a" width={200} />
                    <div className='a' >
                        <div className=" c text-xl   pr-9 text-left font-bold">
                            <h1> I'm  Ahmed Gamal Salem Full stack Developer </h1>
                        </div>
                    </div>
                    <br/>
                </div>
            </div>
        </>
    )
}