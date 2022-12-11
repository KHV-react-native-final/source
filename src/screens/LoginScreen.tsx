import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import BaseBtn from '../components/core/BaseBtn';
import BaseInput from '../components/core/BaseInput';
export default () => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate('RegisterScreen' as never);
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: 'https://wecsaigon.com/wp-content/uploads/2021/11/good-girl.jpg',
        }}
        style={styles.img}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{alignItems: 'center', justifyContent: 'center'}}>
          <View style={styles.loginForm}>
            <BaseInput label="UserName:" placeholder="Enter your username" />
            <BaseInput label="Password" placeholder="Enter your password" />

            <View style={styles.Btn}>
              <BaseBtn title="Login" />
            </View>
            <TouchableOpacity onPress={onPress}>
              <Text
                style={{
                  color: '#000',
                  textAlign: 'center',
                  marginTop: 20,
                }}>
                Register Now
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
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
  Btn: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
