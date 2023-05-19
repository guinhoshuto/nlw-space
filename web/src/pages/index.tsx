import { EmptyMemories } from "@/components/EmptyMemories";
import { Hero } from "@/components/Hero";
import { SignIn } from "@/components/SignIn";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-2 min-h-screen">
      <div className="bg-[url(../assets/bg-stars.svg)] bg-cover relative flex flex-col items-start justify-between px-28 py-16 overflow-hidden border-r border-white/10">
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full blur-full bg-purple-700 opacity-50"></div>
        <div className="absolute bg-stripes w-2 bottom-0 right-2 top-0"></div>
        <SignIn />
        <Hero />

        <div></div>
      </div>
      <div className="flex flex-col p-16 bg-[url(../assets/bg-stars.svg)] bg-cover">
        <EmptyMemories />
      </div>
    </div>
  )
}
