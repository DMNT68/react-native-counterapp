import React from 'react';
import {View, StyleSheet} from 'react-native';

export const TareaScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cajaMorada} />
      <View style={styles.cajaNaranja} />
      <View style={styles.cajaVerde} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28425b',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center'

  },
  cajaMorada: {
      
    width: 100,
    height: 100,
    backgroundColor: '#5856d6',
    borderWidth: 10,
    borderColor: 'white',
  },
  cajaNaranja: {
    width: 100,
    height: 100,
    backgroundColor: '#f0a23b',
    borderWidth: 10,
    borderColor: 'white',
    top:50
  },
  cajaVerde: {
    width: 100,
    height: 100,
    backgroundColor: '#36BBD2',
    borderWidth: 10,
    borderColor: 'white',
  },
});
