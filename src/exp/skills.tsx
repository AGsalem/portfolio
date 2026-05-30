import '../index.css'
export default function Skills() {
    return (
        <>
        <div className=' bg-[#3639cebd] p-3 rounded-t-2xl'>
        <h2>Experience</h2> </div>
            <div id='skills' className="w-full overflow-x-auto px-2 bg-[#3639cebd] table-container    p-10 rounded-b-3xl">
                
                <div className='flex justify-center align-middle min-w-150 w-full'>
                    <table>
                        <thead></thead>
                        <tr className="gap-2">
                            {/* بداية الجدول المعرفات */}
                            <th>Front-End</th>
                            <th>Back-End</th>
                            <th>Database</th>
                            <th>Systems(Linux,Windows)</th>
                        </tr>
                        <tbody>
                            <tr>
                                <td colSpan={4} className="font-bold text-xl">Duration</td>
                            </tr>
                        </tbody>
                        {/* الخبرات */}
                        <tr>
                            <td>1 Year</td>
                            <td>6 Month</td>
                            <td>4 Month</td>
                            <td>1 Year </td>
                        </tr>
                        <thead>
                            <tr><td colSpan={4}>Tech Stack</td></tr>
                        </thead>
                        <tr>
                            <td>Nextjs&React
                                <br />
                                <span className="text-sm" >Html,CSS,JS</span>
                            </td>
                            <td>Express&Fastify&Nestjs</td>
                            <td>Mysql,Postgres</td>
                            <td>Pop!os
                                <b />
                                <p className='text-sm'>KaliLinux</p>
                                <p className='text-sm'>RhinoLiunx</p>
                                <p className='text-sm '>Widows(Puplic)</p>
                            </td>
                        </tr>
                        <thead>
                            <tr>
                                <td colSpan={4} className="font-bold text-xl">Projects</td>
                            </tr>
                        </thead>
{/* دية المشاريع الي عملتاه وهحطها */}
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <thead>
                            <tr>
                                <td colSpan={4} className='text-2xl font-bold'>Language</td>
                            </tr>
                        </thead>
                        <tr>
                            <td colSpan={4}>
                                Python & JavaScript & TypeScript & Dart
                            </td>  </tr>

                    </table>
                </div></div>
        </>
    )
}
// //   <tr
//                              className="flex justify-center items-center text-center">
//                                 {/* لازم اتصرف واحط العنصر دة في النص */}
//                                 Experience Duration
//                         </tr>
//                         <tr><td>postapp</td></tr>
//                         <tr></tr>
//                         <tr></tr>
// <tr></tr>
// 