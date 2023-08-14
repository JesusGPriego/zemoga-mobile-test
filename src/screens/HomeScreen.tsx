import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
// import { LoadingSpinner } from '../components/ui';
import ListEmpty from '../components/ui/ListEmpty';
import { PostList } from '../posts/components/postList';
import { useAppDistpach, useAppSelector } from '../redux';
import { fetchPosts } from '../redux/posts';
import { LoadingSpinner } from '../components/ui';

export const HomeScreen = () => {
  const dispatch = useAppDistpach();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  const { posts, isLoading } = useAppSelector(state => state.posts);

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
