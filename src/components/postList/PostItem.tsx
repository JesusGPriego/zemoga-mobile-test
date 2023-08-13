import React from 'react';
import { View, Text, StyleSheet, Platform, Pressable } from 'react-native';
import { Post } from '../../interfaces';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation';
type Props = {
  post: Post;
};

export const ListItem = ({ post }: Props) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const onPress = () => {
    navigation.navigate('Post');
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={onPress}>
        <Text style={styles.title}>{post.title}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 8,
    borderRadius: 8,
    backgroundColor: '#eff6f4',
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
    color: '#2e524a',
  },
  buttonPressed: {
    opacity: 0.75,
  },
});
