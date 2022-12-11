import React from 'react';
import {
  Dimensions,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  View,
} from 'react-native';
import BaseBtn from '../components/core/BaseBtn';
import BaseInput from '../components/core/BaseInput';
export default () => {
  return (
    <ImageBackground
      source={{
        uri: 'https://wecsaigon.com/wp-content/uploads/2021/11/good-girl.jpg',
      }}
      style={styles.img}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{alignItems: 'center', justifyContent: 'center'}}>
        <View style={styles.loginForm}>
          <BaseInput label="User name" placeholder="Enter your email..." />
          <BaseInput label="Password" placeholder="Enter your password..." />
          <BaseInput
            label="Confirm password"
            placeholder="Enter your password..."
          />
          <View style={styles.btn}>
            <BaseBtn title="Register" />
          </View>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  img: {
    height: Dimensions.get('window').height + 25,
    width: '100%',
    opacity: 0.7,
  },
  loginForm: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingBottom: 25,
    paddingTop: 20,
    marginTop: '60%',
    width: '100%',
  },

  btn: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
