import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native'


const Samples = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Hello from Sample!
    </Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff53f5',
    alignItems: 'center'
  },
  text: {
    color: 'white',
    marginTop: 100,
    fontSize: 24,
    textAlign: 'center'
  },
  image: {
    width: 250,
    height: 250
  }
})

export default Samples