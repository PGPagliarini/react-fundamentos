import { useState } from 'react';
import '../../app/globals.css'
import Pagina from "@/components/Pagina";
import { IconMinus, IconPlus } from '@tabler/icons-react';

export default function PaginaContador() {
    const [numero, setNumero] = useState(0)
    const [delta, setDelta] = useState(1)

    function decrementarDelta() {
        // numero -= 1 (não usar)
        setDelta(delta - 1)
    }

    function incrementarDelta() {
        // numero += 1 (não usar)
        setDelta(delta + 1)
    }

    function decrementar() {
        // numero -= 1 (não usar)
        setNumero(numero - delta)
    }

    function incrementar() {
        // numero += 1 (não usar)
        setNumero(numero + delta)
    }

    
    return (
        <Pagina titulo="Desafio Contador" subtitulo="Incrementando e Decrementando">
            <div className='flex flex-col gap-5 justify-center items-center w-full h-full'>
                <div className='text-9xl font-black'>{numero}</div>
                <div className='flex gap-5'>
                <button onClick={decrementar} className='bg-purple-400 p-4 rounded-full'>
                    <IconMinus size={30} />
                </button>
                <button onClick={incrementar} className='bg-purple-700 p-4 rounded-full'>
                    <IconPlus size={30} />
                </button>
                </div>
                <div className='flex gap-4'>
                    <button onClick={decrementarDelta} className='bg-blue-400 flex justify-center items-center rounded-full w-9 h-9'>
                        <IconMinus size={16} />
                    </button>
                    <span>{delta}</span>
                    <button onClick={incrementarDelta} className='bg-blue-700 flex justify-center items-center rounded-full w-9 h-9'>
                        <IconPlus size={16} />
                    </button>
                </div>
            </div>
        </Pagina>
    )
}