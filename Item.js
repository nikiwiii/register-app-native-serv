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
                    <Pressable style={styles.buttons} onPress={this.props.func}><Text style={styles.text}>DETAILS</Text></Pressable><Text>  </Text>
                    <Pressable style={styles.buttons} onPress={() => console.log('yuh')}><Text style={styles.text}>DELETE</Text></Pressable>
                </View>
                <Text style={{color: 'white', fontSize: 20}}>{this.props.name}</Text>
            </View>
        </View>)
    }
}
const styles = StyleSheet.create({
    centered: {
        display: 'flex',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        marginBottom: 10,
        marginTop: 10,
        backgroundColor: 'rgba(255 255 255 / .07)',
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 20
    },
    image: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        opacity: .7
    },
    buttons: {
        height: 40,
        marginBottom: 20,
        alignSelf: 'center',
        borderColor: 'gainsboro',
        borderBottomWidth: .5,
        borderTopWidth: .5,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'gainsboro',
        fontWeight: 'bold',
        fontSize: 20
    }
  });
export default Item;
