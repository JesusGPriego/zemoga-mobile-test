import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

type Props = {
  color?: string;
};

export const LoadingSpinner = ({ color = 'blue' }: Props) => {
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
