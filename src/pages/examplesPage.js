//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Icon } from '../app';

// create a component
class ExamplesPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          primary
          block
          dark={true}
          size={'lg'}
          title={'Button'}
          onPress={() => { }}
        />
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
