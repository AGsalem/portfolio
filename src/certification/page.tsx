import pdf from '../assets/docs/cv&certificates/Ahmed_Gamal Salem_Back End Developer_resume.pdf'
export default function Cer() {
    return (
        <>
            <div>
                <h1>CV & Certification</h1>
                <br/>
                <div className='flex align-middle items-center justify-center'>
                    <embed src={pdf} width='770' height='950'></embed>
                </div>
                <br />
                </div>
        </>
    )
}