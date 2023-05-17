import { User } from "lucide-react";
import nlwLogo from '../assets/nlw-spacetime-logo.svg'
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-2 min-h-screen">
      <div className="bg-[url(../assets/bg-stars.svg)] bg-cover relative flex flex-col items-start justify-between px-28 py-16 overflow-hidden border-r border-white/10">
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full blur-full bg-purple-700 opacity-50"></div>
        <div className="absolute bg-stripes w-2 bottom-0 right-2 top-0"></div>
        <a href="" className="flex items-center gap-3 text-left hover:text-gray-50 transition-colors">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
            <User className="h-5 w-5 bg-gray-500" />
          </div>
          <p className="text-sm leading-snug max-w-[140px]"><span className="underline">Crie sua conta</span> e salve suas memórias</p>
        </a>


        <div className="space-y-5">
          <Image src={nlwLogo} alt="logo" />
          <div className="max-w-[420px] space-y-1">
            <h1 className="mt-5 text-5xl leading-tight font-bold">Sua cápsula do tempo</h1>
            <p className="text-lg leading-relaxed">Colecione momentos marcantes da sua jornada e compartilhe (se quiser) com o mundo</p>
          </div>
          <a href="" className="mt-5 uppercase rounded-full bg-green-500 hover:bg-green-600 px-5 py-3 font-alt text-sm leading-none text-black">Cadastrar lembraça</a>
        </div>

        <div>
        </div>
      </div>
      <div className="flex flex-col p-16 bg-[url(../assets/bg-stars.svg)] bg-cover">
        <div className="flex flex-1 align-center justify-center">
          <p className="text-center leading-relaxed w-[360px]">
            Você ainda não registrou nenhuma lembrança, comece a{' '} 
            <a className="underline hover:text-gray-50" href="">criar agora</a>
          </p>
        </div>
      </div>
    </div>
  )
}
