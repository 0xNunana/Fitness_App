import { View, Text,ScrollView, TouchableOpacity } from 'react-native'
import {Ionicons,MaterialCommunityIcons} from '@expo/vector-icons'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParams } from '../../App'

 export type Navigationprop = NativeStackNavigationProp<RootStackParams,"Payment">
const Payment = () => {
const navigation = useNavigation<Navigationprop>()

  return (
    <ScrollView className='flex-1 bg-[#1A2f44]'>
        <TouchableOpacity onPress={()=>navigation.goBack()} className='absolute top-0 right-0'>
      <Ionicons name='md-close-circle-sharp' size={32} color="#e8af66"/>
     </TouchableOpacity>
      <View className='m-10 space-y-2'>
        
        <Text className='text-2xl text-center uppercase text-white'>upgrade</Text>
        <Text className='text-center text-white'>Uprgade to PRO to Access all the Features</Text>
     
   {/* logo */}
<View className='items-center'>
  <MaterialCommunityIcons name='trophy-award' size={150} color="#e8af66"/>
</View>


     {/* content */}
     <View className='space-y-5 px-5 py-5'>
<View className='flex-row space-x-10 items-center'>
  <Ionicons name='md-key' size={32} color="#e8af66"/>
<View className='flex-1'>
  <Text className='text-white font-bold text-lg'>
    Access to all pro features
  </Text>
  <Text className='text-sm text-white font-extralight'>
    Upgrade to the premium version of the app and enjoy all the exclusive features available only to pro users.{""}
  </Text>
</View>
</View>

<View className='flex-row space-x-10 items-center'>
  <Ionicons name='md-person-add-outline' size={32} color="#e8af66"/>
<View className='flex-1'>
  <Text className='text-white font-bold text-lg'>
    Helpline 24/7 to Personal Trainers
  </Text>
  <Text className='text-sm text-white font-extralight'>
Get unlimited access to our fitness support team and get help anytime you need it - day or night.{""}
  </Text>
</View>
</View>

<View className='flex-row space-x-10 items-center'>
  <Ionicons name='md-star' size={32} color="#e8af66"/>
<View className='flex-1'>
  <Text className='text-white font-bold text-lg'>
Unlock Limited Edition Content
  </Text>
  <Text className='text-sm text-white font-extralight'>
   Unlock exclusive content that you can't get anywhere else, like special exclusive workouts and routines.{""}
  </Text>
</View>
</View>
     </View>     
      </View>
{/* monthly subscribe */}

 {/* annual subscribe */}

 {/* restore purchases */}


    </ScrollView>
  )
}

export default Payment