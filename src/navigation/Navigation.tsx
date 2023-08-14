import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens';
import { PostScreen } from '../screens';
import { Colors } from '../constants/';
import { Post } from '../posts';
import { Ionicon } from '../components/ui';
import { Alert } from 'react-native';
import { useAppDistpach, useAppSelector } from '../redux';
import { deleteAllNonFavoritePosts } from '../redux/posts';
export type RootStackParamList = {
  Home: undefined;
  Post: Post;
};
const Stack = createNativeStackNavigator<RootStackParamList>();

const StatusBarButton = (color?: string) => {
  const { posts } = useAppSelector(state => state.posts);
  const dispatch = useAppDistpach();
  return (
    <Ionicon
      color={color || undefined}
      size={24}
      name="trash"
      onPress={() =>
        Alert.alert(
          'Delete ALL posts',
          'All post but favorite ones will be deleted.\nContinue?',
          [
            {
              text: 'Cancel',
              onPress: () => {},
              style: 'cancel',
            },
            {
              text: 'OK',
              onPress: () => {
                console.log('borrando cosas');
                dispatch(deleteAllNonFavoritePosts(posts));
              },
            },
          ],
        )
      }
    />
  );
};

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
        options={() => ({
          title: 'Posts',
          headerRight: ({ tintColor }) => StatusBarButton(tintColor),
        })}
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
