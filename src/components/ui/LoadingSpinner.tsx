import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { Colors } from '../../constants';

interface Props {
  color?: string;
}

export const LoadingSpinner = ({ color = Colors.primary700 }: Props) => {
  return (
    <View style={styles.loading}>
      <ActivityIndicator color={color} size={60} />
    </View>
  );
};
const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
