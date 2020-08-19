// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListaMarcacoes from './src/Pages/ListaMarcacoes';
import QrCode from './src/Pages/QrCode'
import Foto from './src/Pages/Foto';


const Stack = createStackNavigator();

function App({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="ListaMarcacoes" component={ListaMarcacoes} />
        <Stack.Screen name="QrCode" component={QrCode} />
        <Stack.Screen name="Foto" component={Foto} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;