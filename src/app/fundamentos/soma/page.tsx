export default function Page() {
    const nome = 'Paulo'
    const idade = 23
    return (
        <div>
            <div>{nome} {idade}</div>
            <div>{8 * 7}</div>
            <div>{idade + 67}</div>
            <div>{Math.random()}</div>
        </div>
    )
}