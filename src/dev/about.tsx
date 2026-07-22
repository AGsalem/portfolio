import a from '../assets/2.png'
export default function About() {
    return (
        <>
            <section>
                <div id="about" className="bg-[#3639cebd] rounded-3xl font-bold    p-5 t-3 ">
                    <h1>About Me</h1>
                    {/* الصورة */}
                    <div className='flex mb-5 ml-4 gap-2.5 '>
                        Email : <a href='mailto:agsalem2025@outlook.com' target='blank' className='text-orange-500 '>agsalem2025@outlook.com</a>
                    </div>
                    <div className='md:flex gap-10'>
                        <img className=" top-5  gap-3.5 w-45 md:w-auto h-auto   p-2" src={a} alt="a" width={20} />
                        {/* الوصف  */}
                        <div className="  text-xl md:text-xl pr-9 text-left  mt-5 mb-5 ">
                            <h2> Full stack Developer</h2>
                            <p >Bulding Web Applactions since 2025</p>
                            <h3>  REST API • UI • UX • Test Api • JWT • Validation • Strong Structrue • multer • Security Testing </h3>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )}
// Courses
// Courses ❌

