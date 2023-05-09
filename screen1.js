import React from 'react';
import { TextInput, StyleSheet, View, Text, ToastAndroid } from 'react-native';
import MyButton from './button';

class Screen1 extends React.Component {
  constructor(){
    super();
    this.state = {
      Settings: {
        adres: 'http://192.168.1.1',
        port: ':4000'
        }
    }
  }
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
        onChangeText={newText => this.name = newText}
        ref={input => {this.input1 = input}}></TextInput>
          <TextInput
        placeholder="password"
        placeholderTextColor="gainsboro" 
        style={styles.input}
        onChangeText={newText => this.pass = newText}
        ref={input => {this.input2 = input}}></TextInput>
          <MyButton styles={styles} func={() => this.register()} text='REGISTER'></MyButton>
        </View>)
    }
    async register() {
      if(this.name && this.pass){
        const response = await fetch(this.state.Settings.adres + this.state.Settings.port + '/send', {
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
        const res = await response.json()
        console.log(res);
        if(res == 'user exists'){
          ToastAndroid.showWithGravity('server: '+res,
          ToastAndroid.SHORT,
          ToastAndroid.CENTER)
        }
        else {
          this.input1.clear()
          this.input2.clear()
          this.name = ''
          this.pass = ''
          this.props.navigation.navigate('list', {
            adres: this.state.Settings.adres,
            port: this.state.Settings.port
          })
        }
      }
      else {
        ToastAndroid.showWithGravity('wpisz nazwę i hasło',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER)
      }
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
