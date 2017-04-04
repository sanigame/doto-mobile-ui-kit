//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from '../app';
import { Icon } from '../../lib'

// create a component
class ExamplesPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button>test</Button>
        <Icon name="facebook" />
        <Icon name="personBlack" />
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default ExamplesPage;
