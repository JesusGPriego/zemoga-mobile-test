import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { Colors } from '../../../constants';
import { Divider } from '../../../components/ui';

interface Props {
  title: string;
  description: string;
  userName: string;
}

export const PostCard = ({ title, description, userName }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.PostCard}>
        <Text style={styles.title}>{title}</Text>
        <Divider />
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.author}>{userName}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  PostCard: {
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
    textAlign: 'left',
    fontSize: 20,
    padding: 12,
    color: Colors.primary700,
  },
  description: {
    textAlign: 'left',
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
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.primary700,
    marginHorizontal: 12,
  },
});
