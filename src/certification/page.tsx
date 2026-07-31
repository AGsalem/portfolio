import cv from '../assets/docs/cv/cv.pdf'
import sprix1 from '../assets/docs/cv/sprix_term1.pdf'
import sprix2 from '../assets/docs/cv/sprix_term2.pdf'
import sprix3 from '../assets/docs/cv/sprix_term3.pdf'
export default function Cer() {
    return (
        <>
            <div className=' flex flex-col font-bold'>
                <div className='bg-cyan-600 p-4 rounded-4xl  flex flex-col mb-5 mt-5'>
                    <h1>CV & Certification</h1>
                    <h1>CV</h1>
                    <a href={cv} target='_blank' className='text-2xl font-bold text-amber-300'> Open Cv</a>
                    <a href={cv} download className='text-2xl font-bold text-black ' >  Download  Cv</a>
                </div>
                <div className='bg-gray-500  rounded-4xl text-gray-500 mb-5'>dfdf</div>
                <div className='bg-green-700 p-5  flex flex-col   rounded-4xl'>
                    <h1>Certification</h1>
                    <a href={sprix1} target='_blank' className='text-2xl font-bold text-violet-200'>See sprix  term 1</a>
                    <a href={sprix2} target='_blank' className='text-2xl font-bold text-fuchsia-800'> See sprix  term 2</a>
                    <a href={sprix3} target='_blank' className='text-2xl font-bold text-black '> See sprix  term 3</a>
                </div>
            </div>
        </>
    )
}