import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { iOSColors } from 'react-native-typography';
import { fonts } from '../../utils/themes';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flex: 0.3,
    alignSelf: 'stretch',
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: iOSColors.white,
    fontSize: 50,
    fontFamily: fonts.lobster,
  },
  content: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: 'blue',
  },
});

const LoginScreen = () => (
  <View style={styles.root}>
    <StatusBar barStyle="light-content" />
    <View style={styles.header}>
      <Text style={styles.headerText}>Doggy Duty</Text>
    </View>
    <View style={styles.content} />
  </View>
);

export default LoginScreen;
