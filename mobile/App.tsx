import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto'
import { BaiJamjuree_700Bold} from '@expo-google-fonts/bai-jamjuree'
import blurBg from './assets/bg-blur.png'
import Stripes from './assets/stripes.svg'
import NLWLogo from './assets/nlw-spacetime-logo.svg'
import { styled } from 'nativewind';

const StyledStripes = styled(Stripes)

export default function App() {
  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold
  })
  if(!hasLoadedFonts){
    return null
  }

  return (
    <ImageBackground 
      source={blurBg} 
      className='flex-1 relative items-center bg-gray-900 px-8'
      imageStyle={{position: 'absolute', left: '-100%'}}
    >
      <StyledStripes className='absolute left-2' />
      <View className='flex-1 items-center justify-center gap-6'>
        <NLWLogo />
        <View className='space-y-2'>
          <Text className='text-center font-title text-2xl leading-tight text-gray-50'>Sua cápsula do tempo </Text>
          <Text className='text-center font-body text-base leading-relaxed text-gray-100'>Colecione momentos marcantes da sua jornada e compartilhe (se quiser) com o mundo!</Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          className='rounded-full bg-green-500 px-5 py-2'
        >
          <Text className='font-alt text-sm uppercase text-black'>Cadastrar lembrança</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="light" translucent />
    </ImageBackground>
  );
}