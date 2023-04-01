export default function Lista(props) {
    return (
        <div>
            <h1>Lista de algo</h1>
            <ul style={{
                listStyle: "none",
                padding: 9
            }}>
                {props.children}
            </ul>
        </div>
    )
}