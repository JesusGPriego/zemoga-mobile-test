import React from 'react';
// import { StyleSheet } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { Navigation } from './src/navigation';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#add1c9',
  },
};

const App = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Navigation />
    </NavigationContainer>
  );
};

export default App;
