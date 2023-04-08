export function Comp1() {
    return <h2>Comp1 #01</h2>
}

export const Comp2 = function() {
    return <h2>Comp2 #02</h2>
}

export default function() {
    return (
        <div>
            <h2>Comp3 #03</h2>
        </div>
    )
}

export const Comp4 = () => {
    return <h2>Comp4 #04</h2>
}

const Comp5 = () => <h2>Comp5 #05</h2>

const Comp6 = props => (
    <div>
        <h2>Comp6 #06 {props.msg}</h2>
    </div>
)

export {
    Comp5, Comp6
}