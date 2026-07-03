import Diagram from "./diagram";
import SQL from "./sql";
export function Schema() {
    return (
        <>
            <h1 >SQL Schema</h1>
            <SQL />

        </>
    )
}
export default function SHOW() {
    return (
        <>
            <h1>Diagram & SQL Schema</h1>
            <h1>Digram</h1>
            <Diagram />
            <h1 >SQL Schema</h1>
            <SQL />
        </>
    )
}