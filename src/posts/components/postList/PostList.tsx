import React from 'react';
import { FlatList } from 'react-native';
import { ListItem } from '.';
import { Post } from '../../domain';

type Props = {
  posts: Post[];
};

export const PostList = ({ posts }: Props) => {
  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => <ListItem post={item} />}
      keyExtractor={(item: Post) => item.id.toString()}
      scrollEnabled
    />
  );
};
