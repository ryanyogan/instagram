import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const LoginScreen = () => (
  <View style={styles.root}>
    <Text>Login Screen</Text>
  </View>
);

export default LoginScreen;
