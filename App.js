import { NavigationContainer } from '@react-navigation/native';
import {AppNavigation} from './src/navigation/AppNavigation';
import Toast from 'react-native-toast-message';
import { View,Text} from 'react-native'

export default function App(){
  return(
    <>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
      <Toast />
      </>
  );
}