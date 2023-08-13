import React from 'react';
// import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './src/navigation';
const App = () => {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 25,
//   },
// });

export default App;
