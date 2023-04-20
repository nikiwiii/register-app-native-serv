import React from 'react';
import { Pressable, TextInput, StyleSheet, View, Text } from 'react-native';

class Screen1 extends React.Component {
    render(){
        return(<View style={styles.centered}>
          <View style={styles.colored}></View>
          <TextInput
        placeholder="name"
        style={styles.input}></TextInput>
          <TextInput
        placeholder="password"
        style={styles.input}></TextInput>
          <Pressable style={[styles.input,styles.buttons]} onPress={() => this.props.navigation.navigate('list')}>
            <Text style={{color: 'white'}}>register</Text>
          </Pressable>
        </View>)
    }
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 250,
    margin: 12,
    alignSelf: 'center',
    borderColor: 'white',
    borderBottomWidth: 1,
    backgroundColor: 'rgba(255 255 255 / .1)',
    borderRadius: 5,
    paddingLeft: 10
  },
  centered: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#2A4494'
  },
  colored: {
    height: 200,
    backgroundColor: '#2A4494'
  },
  buttons: {
    backgroundColor: 'rgba(0 0 0 / .7)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 0
  }
});

export default Screen1;