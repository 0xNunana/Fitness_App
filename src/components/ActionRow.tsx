import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import {Ionicons} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../../App';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


export type NavigationProps = NativeStackNavigationProp<RootStackParams,"Home">


type Props={
    title:string,
    screen:any,
    color:string;
    icon?:any,
    requiresPro?:any,
    vertical?:boolean

}

const ActionRow = ({title,screen,color,icon,vertical,requiresPro}:Props) => {
    const navigation = useNavigation<NavigationProps>()
  return (
        <TouchableOpacity 
        onPress={()=>navigation.navigate(screen)}
        style={{backgroundColor:color,elevation:3}} className={`flex flex-1 rounded-lg justify-center items-center py-6 space-x-2 m-2 ${vertical ? 'flex-col' : 'flex-row'}`}>
        <Ionicons name={icon} size={30} color='white'/> 
      <Text className='text-white font-bold text-lg'>{title}</Text>
    </TouchableOpacity>
  )
}

export default ActionRow