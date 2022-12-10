import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: 'https://wecsaigon.com/wp-content/uploads/2021/11/good-girl.jpg',
        }}
        style={styles.img}>
        <View style={styles.loginForm}>
          <View>
            <Text style={styles.boxTittle}>User Name</Text>
            <TextInput style={styles.input} placeholder="Enter your email..." />
          </View>

          <View>
            <Text style={styles.boxTittle}>Pass Word</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your password..."
            />
          </View>
          <View style={styles.loginBtn}>
            <TouchableOpacity
              style={{
                borderRadius: 10,
                height: 40,
                width: 100,
                backgroundColor: '#FD841F',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: '#ffffff',
                  fontSize: 18,
                  fontWeight: '800',
                  textAlign: 'center',
                }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {justifyContent: 'center', alignItems: 'center'},
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
  input: {
    height: 40,
    margin: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: '#FFEA11',
    padding: 10,
    color: '#FD841F',
    width: 300,
  },

  boxTittle: {
    fontSize: 20,
    fontWeight: '700',
    left: 20,
    color: '#000',
  },
  loginBtn: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
