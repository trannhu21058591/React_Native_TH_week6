import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen01 from './components/Screen01';
import List1 from './components/list1';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen01"screenOptions={{
          headerStyle: {
            height: 30, // độ dài của thanh title
          },
          headerTitleStyle: {
            fontSize: 15, // cỡ chữ trong thanh title
          },
        }}> 
        <Stack.Screen name="Screen01" component={List1}  options={{title: 'Chart', headerShown: true }}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
