import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';

export default (props: TouchableOpacityProps & {tittle: string}) => {
  return (
    <View>
      <TouchableOpacity {...props} style={[style.baseBtn, props.style]}>
        <Text style={style.tittle}>{props.tittle}</Text>
      </TouchableOpacity>
    </View>
  );
};
const style = StyleSheet.create({
  baseBtn: {
    borderRadius: 10,
    height: 40,
    width: 100,
    backgroundColor: '#FD841F',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tittle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '800',
    textAlign: 'center',
  },
});
