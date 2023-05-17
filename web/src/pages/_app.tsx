import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Roboto_Flex as Roboto, Bai_Jamjuree as BaiJamjuree} from 'next/font/google'

const roboto = Roboto({subsets: ['latin'], variable: '--font-roboto'})
const baiJamjuree = BaiJamjuree({subsets: ['latin'], weight: '700', variable: '--font-bai-jamjuree'})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`
      ${roboto.variable} 
      ${baiJamjuree.variable} 
      font-sans
      text-gray-100
      bg-gray-900
      `}>
      <Component {...pageProps} />
    </div>
  )
}
