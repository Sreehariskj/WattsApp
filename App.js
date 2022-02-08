import React from 'react';
// import {LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';

import Welcome from './src/Welcome'
import Login from './src/Login';
import Home from './src/Tab/Home';
import Chat from './src/Chat';
import Status from './src/Tab/Status';
import Calls from './src/Tab/Calls';
import Header from './src/Header';
import Camera from './src/Tab/Camera';
import DrawerContent from './src/Drawer/DrawerContent';
import Otp from './src/Otp';
import Info from './src/Info';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();

// LogBox.ignoreAllLogs()

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, presentation: 'transparentModal'}}>
      {/* <Stack.Screen name="Tab" component={MyTab}></Stack.Screen> */}

      <Stack.Screen name="Welcome" component={Welcome}></Stack.Screen>
      <Stack.Screen name="Login" component={Login}></Stack.Screen>
      <Stack.Screen name="Otp" component={Otp}></Stack.Screen>
      <Stack.Screen name="Info" component={Info}></Stack.Screen>
      <Stack.Screen name="Drawer" component={MyDrawer}></Stack.Screen>
      <Stack.Screen name="Chat" component={Chat}></Stack.Screen>
    </Stack.Navigator>
  );
}

function MyTab({navigation}) {
  return (
    <>
      <Header navigation={navigation}></Header>
      <Tab.Navigator
        initialRouteName="Chats"
        screenOptions={{
          tabBarLabelStyle: {fontSize: 13, color: 'white', fontWeight: 'bold'},
          tabBarStyle: {backgroundColor: '#075E54'},
          tabBarIndicatorStyle: {backgroundColor: '#fff'},
        }}>
        <Tab.Screen
          name="Camera"
          component={Camera}
          options={{
            tabBarIcon: () => <Icon name="camera" size={18} color={'#fff'} />,
            tabBarShowLabel: false,
          }}></Tab.Screen>
        <Tab.Screen name="Chats" component={Home}></Tab.Screen>
        <Tab.Screen name="Status" component={Status}></Tab.Screen>
        <Tab.Screen name="Calls" component={Calls}></Tab.Screen>
      </Tab.Navigator>
    </>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={DrawerContent}
      screenOptions={{headerShown: false, drawerPosition: 'right'}}>
      <Drawer.Screen name="Headerrr" component={MyTab}></Drawer.Screen>
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack></MyStack>
    </NavigationContainer>
  );
}
