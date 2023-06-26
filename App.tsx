import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from './src/screens/HomeScreen';
import DemoScreen from './src/screens/DemoScreen';
import PaymentScreen from './src/screens/PaymentScreen';


export type RootStackParams={
  Home:undefined;
  Payment:undefined;
  Demo:undefined
}
const Stack = createNativeStackNavigator<RootStackParams>()


export default function App() {
 
  return (
    <NavigationContainer>
 <Stack.Navigator>
  <Stack.Screen name='Home' component={HomeScreen} options={{headerShown:false}}/>
  <Stack.Screen name='Demo' component={DemoScreen} options={{headerShown:false}}/>
  <Stack.Screen name='Payment' component={PaymentScreen} options={{headerShown:false,presentation:'modal'}}/>
 </Stack.Navigator>




    </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
