import React from 'react';
import {StyleSheet, Text, TextInput, TextInputProps, View} from 'react-native';

export default (props: TextInputProps & {label: string}) => {
  return (
    <View>
      {/*<Text style={styles.label}>{props.label}</Text>*/}
      {/*<TextInput {...props} style={[styles.input, props.style]} />*/}
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 20,
    fontWeight: '700',
    left: 20,
    color: '#000',
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
});