import { useState } from "react"
import ContadorDisplay from "../../components/ContadorDisplay"

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
            <ContadorDisplay numero={contador}/>
            <div>
                <button style={{width: "40px", margin: "5px"}} onClick={dec}>-</button>
                <button style={{width: "40px"}} onClick={() =>  {setContador(contador +1)}}>+</button>
            </div>
        </div>
    )
}