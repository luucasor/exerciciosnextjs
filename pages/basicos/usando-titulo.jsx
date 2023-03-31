import Titulo from "../../components/Titulo"
export default function UsandoTitulo() {
    return (
        <div>
            <Titulo 
                principal="Página de Cadastro"
                secundario="Incluir, alterar e excluir coisas!"
            />
            <Titulo 
                principal="Página de Login"
                secundario="Informe o seu email e senha!"
            />
        </div>
    )
}