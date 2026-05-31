import '../index.css'
export default function Skills() {
    return (
        // لا خالص هحطة في الموقع يدوس حمل خلصنا بقولك شوف الصورة هل الجدول احط في حاجة تانية غير الي ناقص اكملة ولا اعمل   بتاع جديد بس حاسس كدة كفاي عشان الهيد على الموبيلات جي مظبوط
        <>
            <div className=' bg-[#3639cebd] p-3 rounded-t-2xl'>
               <h2>My Skils</h2>
                <h3>Experiences</h3> </div>
         
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
                                <p className='text-sm '>windows(Genral)</p>
                            </th>
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
                            <td className="font-bold">NextJS&React
                                <br />
                                <span className="text-sm" >Html,CSS,JS</span>
                            </td>
                            <td className="font-bold">
                                <p>Express</p>
                                <p>&Fastify</p>
                                <p>&Nestjs</p>
                            </td>
                            <td className="font-bold">MySQL& <p>Postgres</p></td>
                            <td ><h3 className='font-bold text-xl '>Linux</h3>
                                
                                <p className='text-sm'>Pop!os</p>

                                <p className='text-sm'>KaliLinux</p>
                                <p className='text-sm'>RhinoLiunx</p>
                                {/* <p className='text-sm '>Widows(Puplic)</p> */}
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
                        {/* هنا اللغات */}
                        <thead>
                            <tr>
                                <td colSpan={4} className='text-2xl font-bold'>Language</td>
                            </tr>
                        </thead>
                        <tr>
                            <td colSpan={4} className='font-bold'>
                                Python  &  JavaScript  &  TypeScript  &  Dart
                            </td>  </tr>
                        {/* هنا الكورسات */}
                        <thead>
                            <tr>
                                <td colSpan={4} className='text-xl font-bold'>Cources</td>
                                
                            </tr>
                        </thead>
                        <tr>
                           
                            <td colSpan={4}><h2>CS50_2026</h2></td>
                        </tr>
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