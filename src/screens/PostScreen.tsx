import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation';
import { useFetchUser } from '../users';
import { LoadingSpinner } from '../components/ui';
import { PostCard } from '../posts/components/postDetail';

interface Props extends NativeStackScreenProps<RootStackParamList, 'Post'> {}

export const PostScreen = ({ route }: Props) => {
  const { title, body, userId } = route.params;
  const { isLoading, user } = useFetchUser(userId);
  return user && !isLoading ? (
    <PostCard title={title} description={body} userName={user.username} />
  ) : (
    <LoadingSpinner />
  );
};
