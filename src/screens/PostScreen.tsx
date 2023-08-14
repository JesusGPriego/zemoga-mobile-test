import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation';
import { Divider, LoadingSpinner } from '../components/ui';
import { CommentList, PostCard } from '../posts/components/postDetail';
import { StyleSheet, View } from 'react-native';
import { useFetchPostComments } from '../posts/hooks/useFetchPostComments';
import { useAppDistpach, useAppSelector } from '../redux';
import { useEffect } from 'react';
import { fetchUsers } from '../redux/user';

interface Props extends NativeStackScreenProps<RootStackParamList, 'Post'> {}

export const PostScreen = ({ route }: Props) => {
  const { id, userId, title, body } = route.params;
  const dispatch = useAppDistpach();
  const { user, isLoading } = useAppSelector(state => state.user);

  const { comments } = useFetchPostComments(id);

  useEffect(() => {
    dispatch(fetchUsers(userId));
  }, [dispatch, userId]);

  if (!user || isLoading || !comments) {
    return;
  }

  return (
    <View style={styles.container}>
      {(!user || isLoading || !comments) && <LoadingSpinner />}
      <View style={styles.postCardContainer}>
        <PostCard title={title} description={body} userName={user.username} />
      </View>
      <Divider />
      <View style={styles.commentContainer}>
        <CommentList comments={comments} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  postCardContainer: {
    flex: 0.8,
  },
  commentContainer: {
    flex: 1,
    marginBottom: 25,
    marginTop: 5,
  },
});
