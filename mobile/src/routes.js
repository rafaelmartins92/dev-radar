import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

import Home from './pages/Home'
import Profile from './pages/Profile'

export default function Routes() {
  return (
    <NavigationContainer>

      <Stack.Navigator 
        screenOptions={{
          headerStyle: {
            backgroundColor: '#7D40E7',
          },
          headerTintColor: '#FFF',
          headerTitleStyle: 'bold',
          headerTitleAlign: 'center',
        }}
        >
        <Stack.Screen 
          name="Dev Radar" 
          component={Home}
          />
        <Stack.Screen 
          name="Perfil no Github" 
          component={Profile}
        />
      </Stack.Navigator>

    </NavigationContainer>
  )
} 
