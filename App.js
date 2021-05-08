import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavBar from './src/navbar.js'
import CameraPage from './src/camerapage.js';
import FridgePage from './src/fridge.js';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FridgePage/>
      {/* <CameraPage/> */}
      {/* <NavBar/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appname:{
    fontSize: 80,}
});
