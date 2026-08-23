import '../index.css'
import { Link } from 'react-router-dom'
export default function Skills() {
    return (
        <>
            <div className=' bg-[#3639cebd] p-3 rounded-t-2xl'>
                <h2>My Skills</h2>
                <h3>Tech Skills</h3>
            </div>

            <div id='skills' className="w-full max-w-full block overflow-x-auto overflow-y-auto h-full max-height-[400px] px-2.5  bg-[#3639cebd] p-3 rounded-b-2xl">

                <div className='flex justify-center align-middle min-w-150 w-full '>
                    <table className="w-full  table-fixed">
                        <thead></thead>
                        <tr className="gap-2">
                            {/* بداية الجدول المعرفات */}
                            <th><h2>Front-End</h2></th>
                            <th><h2>Back-End</h2></th>
                            <th><h2>Database</h2></th>
                            <th><h2>Systems</h2>
                                <p className='text-sm font-bold'>(Linux_Windows)</p>
                            </th>
                        </tr>
                        <tbody>
                            <tr>
                                <td colSpan={4} className="font-bold text-xl">Learning Duration</td>
                            </tr>
                        </tbody>
                        {/* الخبرات */}
                        <tr>
                            <td>1 Year</td>
                            <td>6 Month</td>
                            <td>4 Month</td>
                            <td>1 Year</td>
                        </tr>
                        <thead>
                            <tr><td colSpan={4}>Tech Stack</td></tr>
                        </thead>
                        <tr>
                            <td className="font-bold">NextJS<p> React</p>

                                <span className="text-sm" >Html, CSS, JS</span>
                            </td>
                            <td className="font-bold">
                                <p>Express</p>
                                <p>Fastify</p>
                            </td>
                            {/* انواع قواعد البيانات */}
                            <td className="font-bold">MySQL <p>PostgreSQL</p></td>
                            <td ><h3 className='font-bold text-xl '>Linux</h3>
                                <p className='text-sm'>Pop!os</p>
                                <p className='text-sm'>KaliLinux</p>
                                <p className='text-sm'>RhinoLiunx</p>
                            </td>
                        </tr>
                        <thead>
                            <tr>
                                <td colSpan={4} className="font-bold text-xl">Projects</td>
                            </tr>
                        </thead>
                        {/* دية المشاريع الي عملتاه وهحطها */}
                        <tr>
                            <td className='font-bold'>Book App Front</td>
                            <td className='font-bold'>Book App Back</td>
                            <td className='font-bold'>Book App, DB diagram</td>
                            <td className='font-bold'>Management Linux Sytem</td>
                        </tr>
                        {/* هنا اللغات */}
                        <thead>
                            <tr>
                                <td colSpan={4} className='text-2xl font-bold'>Language</td>
                            </tr>
                        </thead>
                        <tr>
                            <td colSpan={4} className='font-bold'>
                                JavaScript   &  TypeScript &    Python
                            </td>  </tr>
                        {/* هنا الكورسات */}
                        <thead>
                            <tr>
                                <td colSpan={4} className='text-xl font-bold'>Cources</td>

                            </tr>
                        </thead>
                        <tr>
                            <td colSpan={4}><h1>CS50_2026</h1>
                                <div id='mycv'></div>
                                <h2 className='text-violet-400  '>
                                    <Link className='text-[#ffd700]  hover:text-blue-100
                                    transition  duration-700 ease-in-out    ' to={'/portfolio/certification'} >See all My Certification </Link>
                                </h2>
                            </td>

                        </tr>
                    </table>
                </div></div>
        </>
    )
}