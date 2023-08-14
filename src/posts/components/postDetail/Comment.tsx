import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { Comment } from '../../domain';
import { Colors } from '../../../constants';

interface Props {
  comment: Comment;
}

export const CommentListItem = ({ comment }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.body}>{comment.body}</Text>
      <Text style={styles.author}>{comment.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 8,
    borderRadius: 8,
    backgroundColor: Colors.primary400,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    overflow: Platform.select({ android: 'hidden', ios: 'visible' }),
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'justify',
    fontSize: 18,
    padding: 8,
    margin: 8,
    color: Colors.primary700,
  },
  body: {
    textAlign: 'justify',
    fontSize: 18,
    padding: 8,
    margin: 8,
    color: Colors.primary700,
  },
  author: {
    fontStyle: 'italic',
    fontWeight: 'bold',
    textAlign: 'right',
    fontSize: 18,
    marginBottom: 10,
    marginHorizontal: 22,
    color: Colors.primary700,
  },
});
