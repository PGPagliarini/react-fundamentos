import Pagina from "@/components/Pagina";

export default function Page() {
    const ano = new Date().getFullYear()
    return (
        <Pagina titulo="Minha Aplicação" subtitulo="Melhor App da Web!">
            <ul className="list-disc pl-8">
                <li>Bella</li>
                <li>Paulo</li>
                <li>Gabriel</li>
                <li>Pagliarini</li>
            </ul>
        </Pagina>
    )
}