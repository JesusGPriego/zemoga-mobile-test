import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens';
import { PostScreen } from '../screens';
import { Colors } from '../constants/';
import { Post } from '../posts';
export type RootStackParamList = {
  Home: undefined;
  Post: Post;
};
const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.primary600,
        },
        headerTintColor: 'white',
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Posts',
        }}
      />
      <Stack.Screen
        name="Post"
        component={PostScreen}
        options={{
          title: 'Details',
        }}
      />
    </Stack.Navigator>
  );
};
