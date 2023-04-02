import { useState } from "react"
import NumeroDisplay from "../../components/NumeroDisplay"

export default function contador() {
    const [contador, setContador] = useState(0)

    const dec = () => setContador(contador -1)
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <h1>Contador</h1>
            <NumeroDisplay numero={contador}/>
            <div>
                <button style={{width: "40px", margin: "5px"}} onClick={dec}>-</button>
                <button style={{width: "40px"}} onClick={() =>  {setContador(contador +1)}}>+</button>
            </div>
        </div>
    )
}