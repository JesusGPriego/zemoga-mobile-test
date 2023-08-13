import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LoadingSpinner } from '../components/ui';
import ListEmpty from '../components/ui/ListEmpty';
import { PostList } from '../posts/components/postList';
import { useFetchPosts } from '../posts';

export const HomeScreen = () => {
  const { posts, isLoading } = useFetchPosts();
  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <View style={styles.container}>
      {posts ? <PostList posts={posts} /> : <ListEmpty />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
