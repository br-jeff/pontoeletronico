// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListaMarcacoes from './src/Pages/ListaMarcacoes'



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ListaMarcacoes" component={ListaMarcacoes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;