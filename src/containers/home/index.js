//import liraries
import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux'
import { Button, View, Text, StyleSheet } from 'react-native';

// create a component
class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Home</Text>
        <Button
          onPress={()=>Actions.colors()}
          title="Colors"
          color="red"
          accessibilityLabel="Learn more about this purple button"/>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

//make this component available to the app
export default Home;
