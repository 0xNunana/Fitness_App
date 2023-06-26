import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParams } from '../../App'
import { useNavigation } from '@react-navigation/native'
import {Ionicons} from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export type NavProps = NativeStackNavigationProp<RootStackParams,"Demo">



const DemoScreen = () => {
    const navigation = useNavigation<NavProps>()
  return (
    <SafeAreaView className='bg-[#e8af66] flex-1'>
        <TouchableOpacity className='flex-row items-center p-5' onPress={()=>navigation.goBack()}>
            <Ionicons name='arrow-back' size={50} color='white'/>
        <Text className='text-white'>Go Back</Text>
        </TouchableOpacity>
{/* 
info */}
<View className='flex-1 items-center justify-center px-10'>
    <Text className='text-white text-2xl font-extrabold'>Congratulations!</Text>
<Text className='text-white text-2xl font-extrabold mb-20'>You have access to this feature</Text>
<MaterialCommunityIcons name="hand-clap" size={200} color="white" />

<View className='-mt-16 -ml-18'>
    <Ionicons name="checkmark-circle-sharp" size={50} color="#96F550"/>
</View>
<Text className='text-white mt-10 flex-1 font-bold text-center'>
    create new screen
</Text>
</View>



      
    </SafeAreaView>
  )
}

export default DemoScreen