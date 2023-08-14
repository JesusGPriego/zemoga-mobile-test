import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Colors } from '../../constants';

export const Divider = () => {
  return <View style={styles.divider} />;
};

const styles = StyleSheet.create({
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.primary700,
    marginHorizontal: 12,
  },
});
