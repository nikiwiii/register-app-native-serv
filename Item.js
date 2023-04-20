import React from 'react';
import { Text, Pressable, View, Image, StyleSheet } from 'react-native';

class Item extends React.Component {
    render(){
        const img = require('./person.png')
        return(
        <View style={styles.centered}>
            <Image source={img} style={styles.image}></Image>
            <View>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                    <Pressable style={styles.buttons} onPress={this.props.func}><Text style={{color: 'white'}}>details</Text></Pressable>
                    <Pressable style={styles.buttons} onPress={console.log('yuh')}><Text style={{color: 'white'}}>delete</Text></Pressable>
                </View>
                <Text style={{alignSelf: 'center', color: 'white'}}>{this.props.name}</Text>
            </View>
        </View>)
    }
}
const styles = StyleSheet.create({
    centered: {
        display: 'flex',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        marginBottom: 25,
        marginTop: 25
    },
    image: {
        width: 80,
        height: 80,
        alignSelf: 'center'
    },
    buttons: {
        height: 40,
        width: 100,
        margin: 12,
        alignSelf: 'center',
        borderColor: 'white',
        borderBottomWidth: 1,
        backgroundColor: '#2A4494',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    }
  });
export default Item;