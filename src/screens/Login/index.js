import React from 'react';
import { View, Text, StyleSheet, StatusBar, TextInput } from 'react-native';
import { iOSColors, human, systemWeights } from 'react-native-typography';
import LinearGradient from 'react-native-linear-gradient';
import Touchable from '@appandflow/touchable';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { fonts } from '../../utils/themes';

const GRADIENT_COLORS = ['#74398D', '#56499E'];

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flex: 0.3,
    alignSelf: 'stretch',
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
  },
  section: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  sectionTop: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  sectionBottom: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  inputWrapper: {
    height: 45,
    width: '90%',
    backgroundColor: '#FAF9F9',
    borderRadius: 5,
    borderColor: '#E4E4E4',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  input: {
    flex: 1,
  },
  loginButton: {
    height: 45,
    width: '90%',
    backgroundColor: '#318DEE70',
    borderRadius: 5,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    color: iOSColors.white,
  },
  forgotWrapper: {
    marginVertical: 10,
    flexDirection: 'row',
  },
  forgotButtonText: {
    ...human.footnoteObject,
    ...systemWeights.semibold,
    color: '#318DEE',
  },
  calloutText: {
    ...human.footnoteObject,
    ...systemWeights.semibold,
    color: iOSColors.midGray,
  },
  orWrapper: {
    width: '90%',
    marginVertical: 10,
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
  },
  orDivider: {
    height: 1,
    width: '100%',
    flex: 1,
    backgroundColor: '#E4E4E4',
  },
  orTextWrapper: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  orText: {
    ...systemWeights.semibold,
    color: iOSColors.gray,
  },
  fbLoginButton: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 45,
  },
  fbLoginButtonText: {
    ...human.calloutObject,
    ...systemWeights.semibold,
    color: '#318DEE',
    marginLeft: 10,
  },
  noAccountWrapper: {
    flexDirection: 'row',
    height: 65,
    width: '100%',
    borderColor: '#ECECEC',
    borderTopWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const LoginScreen = () => (
  <View style={styles.root}>
    <StatusBar barStyle="light-content" />
    <LinearGradient
      start={{ x: 0.0, y: 0.0 }}
      end={{ x: 1.0, y: 1.0 }}
      colors={GRADIENT_COLORS}
      style={styles.header}
    >
      <Text style={styles.headerText}>Doggy Duty</Text>
    </LinearGradient>
    <View style={styles.content}>
      <View style={[styles.section, styles.sectionTop]}>
        <View style={styles.inputWrapper}>
          <TextInput style={styles.input} placeholder="Email" />
        </View>
        <View style={styles.inputWrapper}>
          <TextInput style={styles.input} placeholder="Password" />
        </View>
        <Touchable style={styles.loginButton} feedback="opacity">
          <Text style={styles.loginButtonText}>Login</Text>
        </Touchable>
        <View style={styles.forgotWrapper}>
          <Text style={styles.calloutText}>Forgot your login details? </Text>
          <Touchable feedback="opacity">
            <Text style={styles.forgotButtonText}>Get help signing in.</Text>
          </Touchable>
        </View>
      </View>
      <View style={styles.orWrapper}>
        <View style={styles.orDivider} />
        <View style={styles.orTextWrapper}>
          <Text style={styles.orText}>OR</Text>
        </View>
        <View style={styles.orDivider} />
      </View>
      <View style={[styles.section, styles.sectionBottom]}>
        <Touchable style={styles.fbLoginButton} feedback="opacity">
          <MaterialCommunityIcons
            size={30}
            name="facebook-box"
            color="#318DEE"
          />
          <Text style={styles.fbLoginButtonText}>Continue with Facebook</Text>
        </Touchable>
      </View>
      <View style={styles.noAccountWrapper}>
        <Text style={styles.calloutText}>Don't have an account? </Text>
        <Touchable feedback="opacity">
          <Text style={styles.forgotButtonText}>Sign up.</Text>
        </Touchable>
      </View>
    </View>
  </View>
);

export default LoginScreen;
