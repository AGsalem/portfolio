import { Link } from "react-router-dom";

export default function Error(){
    return(
        <>
        <div >
            <h1 >Error : Page not found please go <Link to={"/portfolio"} className="text-[#f00]" >/portfolio</Link> </h1>
        </div>
        </>
    )
}