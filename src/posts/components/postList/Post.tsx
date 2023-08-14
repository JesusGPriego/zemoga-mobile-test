import React from 'react';
import { View, Text, StyleSheet, Platform, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation';
import { useAppDistpach } from '../../../redux';
import { deletePost } from '../../../redux/posts';
import { Post } from '../../domain';
import { Colors } from '../../../constants';
import { Ionicon } from '../../../components/ui';
import { toggleFavorite } from '../../../redux/posts';
interface Props {
  post: Post;
}

export const ListItem = ({ post }: Props) => {
  const dispatch = useAppDistpach();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const onPress = () => {
    navigation.navigate('Post', post);
  };
  const togglePostFavorite = () => {
    dispatch(toggleFavorite(post.id));
  };

  const deletePostHandler = () => {
    console.log('deleting post');
    dispatch(deletePost(post.id));
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={onPress}>
        <View style={styles.postContainer}>
          <View style={styles.postTextContainer}>
            <Text style={styles.title}>{post.title}</Text>
          </View>
          <View style={styles.iconsContainer}>
            <Ionicon
              name={post.favorite ? 'star' : 'star-outline'}
              size={24}
              color={post.favorite ? Colors.accent500 : undefined}
              onPress={togglePostFavorite}
            />
            <Ionicon name="trash" size={24} onPress={deletePostHandler} />
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 8,
    padding: 8,
    borderRadius: 8,
    backgroundColor: Colors.primary400,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    overflow: Platform.select({ android: 'hidden', ios: 'visible' }),
  },
  postContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  postTextContainer: {
    flex: 1,
  },
  iconsContainer: {
    flex: 0.1,
    flexDirection: 'column',
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'justify',
    fontSize: 18,
    padding: 8,
    margin: 8,
    color: Colors.primary700,
  },
  buttonPressed: {
    opacity: 0.75,
  },
});
