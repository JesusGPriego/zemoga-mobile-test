import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation';
import { Divider, LoadingSpinner } from '../components/ui';
import { CommentList, PostCard } from '../posts/components/postDetail';
import { StyleSheet, View } from 'react-native';
import { useAppDistpach, useAppSelector } from '../redux';
import { useEffect } from 'react';
import { fetchUsers } from '../redux/user';
import { fetchComments } from '../redux/comments';

interface Props extends NativeStackScreenProps<RootStackParamList, 'Post'> {}

export const PostScreen = ({ route }: Props) => {
  const { id, userId, title, body } = route.params;
  const dispatch = useAppDistpach();
  const { user, isLoading } = useAppSelector(state => state.user);
  const { comments, isLoading: commentsLoading } = useAppSelector(
    state => state.comments,
  );

  useEffect(() => {
    dispatch(fetchUsers(userId));
    dispatch(fetchComments(id));
  }, [dispatch, userId, id]);

  if (!user) {
    return;
  }

  return (
    <View style={styles.container}>
      {(isLoading || commentsLoading) && <LoadingSpinner />}
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
