import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>Box Object Model</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor:'red'
    },
    title: {
      paddingHorizontal: 120,
      paddingVertical:170,
        fontSize: 20,
        // width: 150,
        borderWidth:10
    }
});
