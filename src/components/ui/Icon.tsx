import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../../constants';

interface Props {
  name: string;
  color?: string;
  size?: number;
}

export const Ionicon = ({
  name,
  color = Colors.primary700,
  size = 24,
}: Props) => {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          console.log('icon clicked');
        }}>
        <Text>
          <Icon name={name} color={color} size={size} />;
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 2,
  },
});
