import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Pressable, Alert } from 'react-native';
import Main from './src/components/Main';
import { NativeRouter } from 'react-router-native';

export default function App() {
  console.log(12334556789073283823672638726873682768372)
  return (
    <NativeRouter>
        <Main />
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
