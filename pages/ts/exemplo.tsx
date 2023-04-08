import Pessoa from "../../components/Pessoa";

export default function exemploTS() {
    return (
        <div>
            <div>
                <Pessoa nome="João" idade={30}/>
            </div>
            <div>
                <Pessoa nome="Maria"/>
            </div>
        </div>
    )
}