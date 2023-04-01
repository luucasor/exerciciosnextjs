import { useState } from "react"

export default function contador() {
    const [contador, setContador] = useState(0)

    const dec = () => setContador(contador -1)
    return (
        <div>
            <h1>Contador</h1>
            <div>Valor: {contador}</div>
            <button onClick={dec}>-</button>
            <button onClick={() =>  {setContador(contador +1)}}>+</button>
        </div>
    )
}