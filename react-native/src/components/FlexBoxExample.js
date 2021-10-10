import React from 'react';
import { View, Text, StyleSheet } from 'react-native';



const styles = StyleSheet.create({
  flexContainer: {
    display: 'flex',
  },
  flexItemA: {
    flexGrow: 0,
    backgroundColor: 'green',
  },
  flexItemB: {
    flexGrow: 4,
    backgroundColor: 'blue',
  },
});

const FlexBoxExample = () => {
  return (
    <View style={styles.flexContainer}>
      <View style={styles.flexItemA}>
        <Text>Flex Item A</Text>
      </View>
      <View style={styles.flexItemB}>
        <Text>Flex Item B</Text>
      </View>
    </View>
  )
}

export default FlexBoxExample;
