//import liraries
import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, Platform } from 'react-native';
import {
  Button,
  IconButton,
  Icon
} from '../app';

// create a component
class ButtonPage extends Component {

  render() {
    const buttonType = ['default', 'flat', 'outLine', 'flatTransparent', 'outLineTransparent', 'transparent']

    return (
      <ScrollView style={{ backgroundColor: '#dfdfdf', padding: 10}}>
        <View style={{ backgroundColor: '#ffffff', flexDirection: 'column', justifyContent: 'space-between', flex: 1, minHeight: 100, borderRadius: 3, padding: 5, marginBottom: 15 }}>
          <Button
            icon={'facebook'}
            dark={true}
            size={'lg'}
            block
            lineColor
            title={'Continue with Facebook'}
            theme={'facebook'}
            onPress={() => { }}
          />
          <View style={{ height: 5 }} />
          <Button
            icon={'personWhite'}
            size={'lg'}
            block
            lineColor
            title={'Continue with Facebook'}
            theme={'facebook'}
            onPress={() => { }}
          />
          <View style={{ height: 5 }} />
          <Button
            icon={'personBlack'}
            size={'lg'}
            block
            lineColor
            outLine
            title={'Log in with Email'}
            theme={'secondary2'}
            onPress={() => { }}
          />
          <View style={{ height: 5 }} />
          <Button
            icon={'fingerPrint'}
            size={'lg'}
            block
            lineColor
            outLine
            title={'Log in with Biometric'}
            theme={'danger'}
            onPress={() => { }}
          />
          <View style={{ height: 5 }} />
          <Button
            icon={'plus'}
            size={'xs'}
            outLine
            width={86}
            title={'Follow'}
            theme={'primary'}
            onPress={() => { }}
          />
          <View style={{ height: 5 }} />
          <Button
            icon={'check'}
            size={'xs'}
            outLine
            active
            width={120}
            title={'Following'}
            theme={'primary'}
            onPress={() => { }}
          />
          <View style={{ height: 5 }} />
          <Button
            icon={'check'}
            size={'xs'}
            outLine
            width={200}
            title={'Following'}
            theme={'primary'}
            onPress={() => { }}
          />
          <View style={{ height: 5 }} />
          <IconButton size={'md'} icon={'facebook'} />
          <View style={{ height: 5 }} />
        </View>
        {
          buttonType.map((value, key) => {
            return (
              <View key={key} style={{ backgroundColor: (value === 'flatTransparent') || (value === 'outLineTransparent') || (value === 'transparent') ? '#27ad5f' : '#ffffff', flexDirection: 'column', justifyContent: 'space-between', flex: 1, minHeight: 100, borderRadius: 3, padding: 5, marginBottom: 15 }}>
                <Button
                  {...{ [value]: true }}
                  block
                  icon={'personWhite'}
                  dark={true}
                  size={'lg'}
                  title={'Button'}
                  onPress={() => {}}
                  />
                <View style={{ height: 5 }} />
                <Button
                  {...{ [value]: true }}
                  block
                  iconRight={'personWhite'}
                  dark={true}
                  size={'lg'}
                  title={'Button'}
                  onPress={() => {}}
                  />
                <View style={{ height: 5 }} />
                {
                  value === 'default'
                  ? <View>
                    <Button
                      {...{ [value]: true }}
                      icon={'personWhite'}
                      dark={true}
                      lineColor
                      size={'lg'}
                      title={'Button'}
                      onPress={() => {}}
                      />
                    <View style={{ height: 5 }} />
                    <Button
                      {...{ [value]: true }}
                      iconRight={'personWhite'}
                      dark={true}
                      lineColorRight
                      size={'lg'}
                      title={'Button'}
                      onPress={() => {}}
                      />
                    <View style={{ height: 5 }} />
                    <Button
                      {...{ [value]: true }}
                      icon={'personWhite'}
                      dark={true}
                      size={'lg'}
                      title={'Button'}
                      onPress={() => {}}
                      />
                    <View style={{ height: 5 }} />
                    <Button
                      {...{ [value]: true }}
                      iconRight={'personWhite'}
                      dark={true}
                      size={'lg'}
                      title={'Button'}
                      onPress={() => {}}
                      />
                    <View style={{ height: 5 }} />
                    <Button
                      {...{ [value]: true }}
                      block
                      iconRight={'personWhite'}
                      width={200}
                      active
                      size={'lg'}
                      title={'Button active'}
                      />
                    <View style={{ height: 5 }} />
                  </View>
                  : null
                }
                <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between' }} >
                  <View>
                    <Button
                      {...{ [value]: true }}
                      size={'xs'}
                      title={'Button'}
                      />
                    <View style={{ height: 5 }} />
                    <Button
                      {...{ [value]: true }}
                      size={'xs'}
                      theme={'secondary'}
                      title={'Button'}
                      />
                    <View style={{ height: 5 }} />
                    <Button
                      {...{ [value]: true }}
                      icon={'personBlack'}
                      size={'xs'}
                      theme={'success'}
                      title={'Button'}
                      />
                    <View style={{ height: 5 }} />
                    <Button
                      {...{ [value]: true }}
                      icon={'personBlack'}
                      lineColor
                      size={'xs'}
                      theme={'danger'}
                      title={'Button'}
                      />
                    <View style={{ height: 5 }} />
                    <Button
                      {...{ [value]: true }}
                      disabled
                      size={'xs'}
                      theme={'danger'}
                      title={'Button'}
                      />
                    <View style={{ height: 5 }} />
                  </View>
                  <View>
                    <Button
                      {...{ [value]: true }}
                      size={'sm'}
                      title={'Button'}
                      />
                    <View style={{ height: 5 }} />
                    <Button
                      {...{ [value]: true }}
                      size={'sm'}
                      theme={'secondary'}
                      title={'Button'}
                      />
                    <View style={{ height: 5 }} />
                    <Button
                      {...{ [value]: true }}
                      size={'sm'}
                      theme={'success'}
                      title={'Button'}
                      />
                    <View style={{ height: 5 }} />
                    <Button
                      {...{ [value]: true }}
                      size={'sm'}
                      theme={'danger'}
                      title={'Button'}
                      />
                    <View style={{ height: 5 }} />
                    <Button
                      {...{ [value]: true }}
                      disabled
                      size={'sm'}
                      theme={'danger'}
                      title={'Button'}
                      />
                    <View style={{ height: 5 }} />
                  </View>
                  <View>
                    <Button
                      {...{ [value]: true }}
                      size={'md'}
                      title={'Button'}
                      />
                    <View style={{ height: 5 }} />
                    <Button
                      {...{ [value]: true }}
                      size={'md'}
                      theme={'secondary'}
                      title={'Button'}
                      />
                    <View style={{ height: 5 }} />
                    <Button
                      {...{ [value]: true }}
                      size={'md'}
                      theme={'success'}
                      title={'Button'}
                      />
                    <View style={{ height: 5 }} />
                    <Button
                      {...{ [value]: true }}
                      size={'md'}
                      theme={'danger'}
                      title={'Button'}
                      />
                    <View style={{ height: 5 }} />
                    <Button
                      {...{ [value]: true }}
                      disabled
                      size={'md'}
                      theme={'danger'}
                      title={'Button'}
                      />
                    <View style={{ height: 5 }} />
                  </View>
                  <View>
                    <Button
                      {...{ [value]: true }}
                      size={'lg'}
                      title={'Button'}
                      />
                    <View style={{ height: 5 }} />
                    <Button
                      {...{ [value]: true }}
                      size={'lg'}
                      theme={'secondary'}
                      title={'Button'}
                      />
                    <View style={{ height: 5 }} />
                    <Button
                      {...{ [value]: true }}
                      size={'lg'}
                      theme={'success'}
                      title={'Button'}
                      />
                    <View style={{ height: 5 }} />
                    <Button
                      {...{ [value]: true }}
                      size={'lg'}
                      theme={'danger'}
                      title={'Button'}
                      />
                    <View style={{ height: 5 }} />
                    <Button
                      {...{ [value]: true }}
                      disabled
                      size={'lg'}
                      theme={'danger'}
                      title={'Button'}
                      />
                    <View style={{ height: 5 }} />
                  </View>
                </View>
              </View>
            )
          })
        }
      </ScrollView>
    );
  }
}

// define your styles
const styles = StyleSheet.create({

});

//make this component available to the app
export default ButtonPage;

