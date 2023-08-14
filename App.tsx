import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { Navigation } from './src/navigation';
import { store } from './src/redux';
import { Colors } from './src/constants/';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.primary500,
  },
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer theme={MyTheme}>
        <Navigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
