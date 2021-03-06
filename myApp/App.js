import 'react-native-gesture-handler'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Dimensions  } from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import  {LoginForm}  from './components/loginForm';
import {SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native';
import { MealScreen } from './components/meal.screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomePage } from './containers/home';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { MealCard } from './components/meal.card';
import { Provider } from 'react-redux'
import store from './assets/redux/store';
import { TabNavigator } from './components/topNav';
import { Profil } from './containers/profil';
import { LivreurOrderScreen } from './containers/livreur.orderScreen';
import { Cart } from './components/cart';


export default function App() {


  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <IconRegistry icons={EvaIconsPack} />
          <ApplicationProvider {...eva} theme={eva.light} >
            <Provider store={store}>
              <Stack.Navigator  initialRouteName='cart'>
                  <Stack.Screen name='profil' component={Profil}/>
                  <Stack.Screen name='home' component={TabNavigator}/>
                  <Stack.Screen name='login' component={LoginForm}/>
                  <Stack.Screen name='livreurOrders' component={LivreurOrderScreen}/>
                  <Stack.Screen name='cart' component={Cart}/>
              </Stack.Navigator>
            </Provider>
          </ApplicationProvider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
