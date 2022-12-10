import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import BaseBtn from '../components/core/BaseBtn';
import BaseInput from '../components/core/BaseInput';
export default () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: 'https://wecsaigon.com/wp-content/uploads/2021/11/good-girl.jpg',
        }}
        style={styles.img}>
        <View style={styles.loginForm}>
          <BaseInput label="UserName:" placeholder="Enter your username" />
          <BaseInput label="Password" placeholder="Enter your password" />

          {/* <View>
            <Text style={styles.boxTittle}>User Name</Text>
            <TextInput style={styles.input} placeholder="Enter your email..." />
          </View>

          <View>
            <Text style={styles.boxTittle}>Pass Word</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your password..."
            />
          </View> */}

          <View style={styles.Btn}>
            <BaseBtn tittle="Login" />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
  img: {
    position: 'absolute',
    height: 845,
    width: '100%',
    elevation: 2,
    top: '0%',
    opacity: 0.7,
  },
  loginForm: {
    marginTop: 370,
    elevation: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingBottom: 25,
    paddingTop: 20,
    marginLeft: 5,
    marginRight: 5,
  },
  Btn: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
