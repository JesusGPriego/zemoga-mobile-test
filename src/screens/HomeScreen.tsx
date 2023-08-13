import React from 'react';
import { View, Text } from 'react-native';
import { usePosts } from '../hooks';
import { LoadingSpinner } from '../components/ui';

export const HomeScreen = () => {
  const { posts, isLoading } = usePosts();
  console.log(posts && posts[0].body);

  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <View>
      <Text>Hola</Text>
    </View>
  );
};
