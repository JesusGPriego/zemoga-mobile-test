import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { Colors } from '../../constants';
import { Dimensions } from 'react-native';

interface Props {
  color?: string;
}

var { width, height } = Dimensions.get('window');
export const LoadingSpinner = ({ color = Colors.primary700 }: Props) => {
  return (
    <View style={styles.loading}>
      <ActivityIndicator color={color} size={60} />
    </View>
  );
};
const styles = StyleSheet.create({
  loading: {
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.5,
    height: height,
    width: width,
    backgroundColor: Colors.primary400,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9000,
  },
});
