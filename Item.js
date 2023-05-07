import React from 'react';
import { Text, Pressable, View, Image, StyleSheet, DeviceEventEmitter } from 'react-native';

class ListItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        const img = require('./person.png')
        return(
        <View style={styles.centered}>
            <Image source={img} style={styles.image}></Image>
            <View style={styles.container}>
                <Text style={{color: 'white', opacity: .6, fontSize: 20, textAlign: 'center', textDecorationLine: 'underline'}}>{this.props.name}</Text>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                    <Pressable style={styles.buttons} onPress={this.props.func}><Text style={styles.text}>DETAILS</Text></Pressable><Text>  </Text>
                    <Pressable style={styles.buttons} onPress={() => this.delete()}><Text style={styles.text}>DELETE</Text></Pressable>
                </View>
            </View>
        </View>)
    }

    delete() {
        fetch(this.props.deleteLink, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.props.var),
        });
        DeviceEventEmitter.emit('refresh', {})
    }
}
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'space-around'
    },
    centered: {
        display: 'flex',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        marginBottom: 10,
        marginTop: 10,
        backgroundColor: 'rgba(75, 112, 0 / .15)',
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 20,
        width: '90%',
        marginLeft: '5%',
        marginRight: '5%'
    },
    image: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        opacity: .6
    },
    buttons: {
        backgroundColor: 'transparent',
        justifyContent: 'center',
    },
    text: {
        borderColor: 'white',
        borderBottomWidth: .5,
        borderTopWidth: .5,
        color: 'white', 
        fontWeight: 'bold',
        fontSize: 20,
        paddingTop: 2,
        opacity: .6
    }
  });
export default ListItem;
