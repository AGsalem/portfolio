import db from "../../../assets/docs/design.avif"
export default function Diagram() {
    return (
        <>
            <br />
            <div >
                <div className="rounded-2xl flex align-middle justify-center items-center ">
                    <img src={db} className="rounded-2xl flex align-middle justify-center items-center" alt="صورة الرسم البياني لي القاعدة البيانات" />
                </div>
            </div>
        </>
    )

}