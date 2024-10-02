interface BotoesProps {
    alterarNome(nome: string): void
    //ou alterarNome: () => void
}

export default function Botoes(props: BotoesProps) {
    return (
        <div className="flex gap-5">
            <button onClick={() => props.alterarNome('Bella')} className="botao">Bella</button>
            <button onClick={() => props.alterarNome('Paulo')} className="botao">Paulo</button>
            <button onClick={() => props.alterarNome('Marina')} className="botao">Marina</button>
        </div>
    )
}