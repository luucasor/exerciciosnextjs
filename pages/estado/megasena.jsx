import { useEffect, useState } from "react"
import { mega } from "../../functions/mega"
import NumeroDisplay from "../../components/NumeroDisplay"

export default function megasena() {
    const [qtde, setQtde] = useState(6)
    const [numeros, setNumeros] = useState([])

    useEffect(() => {
        setNumeros(mega())
    }, [])

    function renderizarNumeros() {
        return numeros.map(
            numero => <NumeroDisplay key={numero} numero={numero}/>
        )
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "10px"
        }}>
            <h1>Mega Sena</h1>
            <div style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap"
            }}>
                {renderizarNumeros()}
            </div>
            <div>
                <input type="number" min={6} max={20} value={qtde}
                    style={{
                        margin: "5px",
                        textAlign: "center"
                    }}
                    onChange={(e) => setQtde(e.target.value)}/>
                <button onClick={() => setNumeros(mega(qtde))}>
                    Gerar Aposta
                </button>
            </div>
        </div>
    )
}