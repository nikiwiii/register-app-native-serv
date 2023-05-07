import React from 'react';
import { Pressable, TextInput, StyleSheet, View, Text } from 'react-native';

class Screen1 extends React.Component {
    name = ''
    pass = ''
    render(){
        return(<View style={styles.centered}>
          <Text style={{height: 12}}> </Text>
          <View style={styles.colored}>
            <Text style={styles.rt}>R</Text><Text style={styles.rt}>E</Text><Text style={styles.rt}>G</Text><Text style={styles.rt}>I</Text>
            <Text style={styles.rt}>S</Text><Text style={styles.rt}>T</Text><Text style={styles.rt}>E</Text><Text style={styles.rt}>R</Text>
          </View>
          <TextInput
        placeholder="name"
        placeholderTextColor="gainsboro" 
        style={styles.input}
        onChangeText={newText => this.name = newText}></TextInput>
          <TextInput
        placeholder="password"
        placeholderTextColor="gainsboro" 
        style={styles.input}
        onChangeText={newText => this.pass = newText}></TextInput>
          <Pressable style={styles.buttons} onPress={() => this.register()}>
            <Text style={styles.text}>REGISTER</Text>
          </Pressable>
        </View>)
    }
    register = () => {
      if(this.name && this.pass){
        fetch('http://192.168.10.112:4000/send', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: this.name,
            password: this.pass,
            registered: new Date().toLocaleString()
          }),
        });
      }
      this.props.navigation.navigate('list')
    }
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 250,
    margin: 12,
    alignSelf: 'center',
    borderColor: 'gainsboro',
    borderBottomWidth: .5,
    paddingLeft: 10,
    color: 'white'
  },
  centered: {
    flex: 1,
    display: 'flex',
    backgroundColor: '#2A4000'
  },
  colored: {
    flex: .65,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 220
  },
  rt: {
    fontSize: 170,
    color: 'rgba(255 255 255 / .1)',
    fontWeight: 'bold',
    lineHeight: 170,
    height: 120
  },
  buttons: {
    paddingLeft: 0,
    marginBottom: 20,
    marginTop: 10,
    alignSelf: 'center',
    borderColor: 'white',
    borderBottomWidth: .5,
    borderTopWidth: .5,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'gainsboro',
    fontWeight: 'bold',
    letterSpacing: 10.7,
    fontSize: 32
  }
});

export default Screen1;