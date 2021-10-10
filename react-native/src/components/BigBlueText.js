import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 20,
  },
  text: {
    color: 'blue',
    fontSize: 24,
    fontWeight: '700',
  },
});


const BigBlueText = () => {
  return (
    <View style={styles.container1}>
      <Text style={styles.text}>
        Big Blue Text
      </Text>
    </View>
  )
}

export default BigBlueText;
