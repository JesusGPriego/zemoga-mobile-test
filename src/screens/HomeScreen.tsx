import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LoadingSpinner } from '../components/ui';
import { usePosts } from '../hooks';
import { PostList } from '../components/postList';

export const HomeScreen = () => {
  const { posts, isLoading } = usePosts();
  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <View style={styles.container}>{posts && <PostList posts={posts} />}</View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
