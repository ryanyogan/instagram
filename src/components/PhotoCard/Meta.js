import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { human, systemWeights } from 'react-native-typography';

const styles = StyleSheet.create({
  root: {
    minHeight: 50,
    paddingHorizontal: 16,
  },
  wrapper: {
    flex: 1,
  },
  text: {
    ...human.footnoteObject,
    ...systemWeights.light,
  },
  regularText: {
    ...systemWeights.regular,
  },
});

const Meta = ({ caption, username = 'mryogibeara' }) => (
  <View style={styles.root}>
    <View style={styles.wrapper}>
      <Text style={styles.text}>
        Liked by <Text style={styles.regularText}>Jack Ryan</Text> and{' '}
        <Text style={styles.regularText}>1,288,341 others.</Text>
      </Text>
    </View>
    <View style={styles.wrapper}>
      <Text numberOfLines={2} style={styles.text}>
        <Text style={styles.regularText}>{username}</Text> {caption}
      </Text>
    </View>
  </View>
);

export default Meta;
