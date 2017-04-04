//import liraries
import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, Platform } from 'react-native';
import { theme } from '../themes/theme';
import { Button } from '../containers';

// create a component
class ButtonPage extends Component {

  state = {
    isOnPressing: false
  }

  render() {

    let onPressProps;
    if (this.state.isOnPressing) {
      onPressProps = styles.buttonStylePressing
    } else {
      onPressProps = styles.buttonStyle1
    }

    return (
      <ScrollView>
        <View style={styles.container}>
          <Button>
            Hello
          </Button>
          <Button
            size="xs"
            theme={theme.primary}
            onPress={() => {console.log('world!')}}>
            Hello
          </Button>
          <Button
            size="sm"
            theme={theme.primary}
            onPress={() => {console.log('world!')}}>
            Hello
          </Button>
          <Button
            size="md"
            theme={theme.primary}
            onPress={() => {console.log('world!')}}>
            Hello
          </Button>
          <Button
            size="lg"
            theme={theme.primary}
            onPress={() => {console.log('world!')}}>
            Hello
          </Button>
          <Button
            style={styles.buttonStyle5} textStyle={styles.textStyle}
            onPress={() => {
              console.log('world!')
            }}>
            Hello
          </Button>
          <Button
            style={styles.buttonStyle5} textStyle={styles.textStyle}
            onPress={() => {
              console.log('world!')
            }}>
            Hello
        </Button>
          <Button
            style={styles.buttonStyle5} textStyle={styles.textStyle}
            onPress={() => {
              console.log('world!')
            }}>
            Hello
          </Button>
          <Button
            style={styles.buttonStyle6} textStyle={styles.textStyle}
            onPress={() => {
              console.log('world!')
            }}>
            Hello
          </Button>
          <Button
            style={styles.buttonStyle7} textStyle={styles.textStyle6}
            onPress={() => {
              console.log('world!')
            }}>
            Hello
          </Button>
          <Button
            isLoading={true}
            style={styles.buttonStyle7} textStyle={styles.textStyle6}
            onPress={() => {
              console.log('world!')
            }}>
            Hello
          </Button>
          <Button
            disabledStyle={styles.buttonStyle8}
            isDisabled={true}
            textStyle={styles.textStyle8}>
            Disabled
          </Button>
          <Button style={styles.buttonStyle8}
            textStyle={styles.textStyle8}
            onPress={() => console.log('world!')}>
            <View style={styles.customViewStyle}>
              <Text style={{ textAlign: 'center', fontFamily: 'Avenir' }}>
                Custom inner view
            </Text>
            </View>
          </Button>
        </View>
      </ScrollView>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
  },
  textStyle: {
    color: 'white'
  },
  textStyle6: {
    color: '#8e44ad',
    fontFamily: 'Avenir',
    fontWeight: 'bold'
  },
  buttonStylePressing: {
    borderColor: 'red',
    backgroundColor: 'red'
  },
  buttonStyle: {
    borderColor: '#f39c12',
    backgroundColor: '#f1c40f'
  },
  buttonStyle1: {
    borderColor: '#d35400',
    backgroundColor: '#e98b39'
  },
  buttonStyle2: {
    borderColor: '#c0392b',
    backgroundColor: '#e74c3c'
  },
  buttonStyle3: {
    borderColor: '#16a085',
    backgroundColor: '#1abc9c'
  },
  buttonStyle4: {
    borderColor: '#27ae60',
    backgroundColor: '#2ecc71'
  },
  buttonStyle5: {
    borderColor: '#2980b9',
    backgroundColor: '#3498db'
  },
  buttonStyle6: {
    borderColor: '#8e44ad',
    backgroundColor: '#9b59b6'
  },
  buttonStyle7: {
    borderColor: '#8e44ad',
    backgroundColor: 'white',
    borderRadius: 0,
    borderWidth: 3,
  },
  buttonStyle8: {
    backgroundColor: 'white',
    borderColor: '#333',
    borderWidth: 2,
    borderRadius: 22,
  },
  textStyle8: {
    width: 200,
    fontFamily: 'Avenir Next',
    fontWeight: '500',
    color: '#333',
  },
  customViewStyle: {
    width: 120,
    height: 40,
    alignItems: 'center',
    flexDirection: 'row',
  }
});

//make this component available to the app
export default ButtonPage;

