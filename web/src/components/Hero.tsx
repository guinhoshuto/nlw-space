import nlwLogo from '../assets/nlw-spacetime-logo.svg'
import Image from 'next/image'

export function Hero(){
    return(
        <div className="space-y-5">
          <Image src={nlwLogo} alt="logo" />
          <div className="max-w-[420px] space-y-2">
            <h1 className="mt-5 text-5xl leading-tight font-bold">Sua cápsula do tempo</h1>
            <p className="text-lg leading-relaxed">Colecione momentos marcantes da sua jornada e compartilhe (se quiser) com o mundo</p>
          </div>
          <a href="" className="mt-5 uppercase rounded-full bg-green-500 hover:bg-green-600 px-5 py-3 font-alt text-sm leading-none text-black">Cadastrar lembraça</a>
        </div>
    )
}