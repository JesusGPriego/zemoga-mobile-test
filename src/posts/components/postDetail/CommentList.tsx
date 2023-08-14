import React from 'react';
import { FlatList } from 'react-native';
import { Comment } from '../../domain';
import { CommentListItem } from './Comment';

interface Props {
  comments: Comment[];
}

export const CommentList = ({ comments }: Props) => {
  return (
    <FlatList
      data={comments}
      renderItem={({ item }) => <CommentListItem comment={item} />}
      keyExtractor={(item: Comment) => item.id.toString()}
      scrollEnabled
    />
  );
};
