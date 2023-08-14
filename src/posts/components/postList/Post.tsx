import React from 'react';
import { View, Text, StyleSheet, Platform, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation';
import { Post } from '../../domain';
import { Colors } from '../../../constants';
import { Ionicon } from '../../../components/ui';
interface Props {
  post: Post;
}

export const ListItem = ({ post }: Props) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const onPress = () => {
    navigation.navigate('Post', post);
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
            <View>
              <Ionicon name="star-outline" size={24} />
            </View>
            <Ionicon name="trash" size={24} />
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
