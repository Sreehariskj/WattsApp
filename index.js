/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import AuthContextProvider from './src/contexts/AuthContext';


function Main() {
  return (
    <AuthContextProvider>
      <App></App>
    </AuthContextProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
