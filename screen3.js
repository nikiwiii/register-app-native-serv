import React from 'react';
import { Text,Image,View,StyleSheet } from 'react-native';

class Screen3 extends React.Component {

    render(){
        const img = require('./person.png')
        return(<View style={styles.full}>
          <View style={styles.centered}>
            <Image source={img} style={styles.image}></Image>
            <Text style={{color: '#4b7000'}}>LOGIN:</Text>
            <Text style={{color: 'white', fontSize: 26}}>{this.props.route.params.el.name}</Text>
            <Text style={{color: '#4b7000'}}>PASSWORD:</Text>
            <Text style={{color: 'white', fontSize: 26}}>{this.props.route.params.el.password}</Text>
            <Text style={{color: '#4b7000'}}>REGISTERED:</Text>
            <Text style={{color: 'white', fontSize: 26}}>{this.props.route.params.el.registered}</Text>
          </View>
          </View>)
    }
}
const styles = StyleSheet.create({
    full: {
        backgroundColor: '#162100',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        flex:1,
    },
    centered: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'column',
        marginBottom: 25,
        marginTop: 25,
        flex:.8,
    },
    image: {
        width: 160,
        height: 160,
        alignSelf: 'center'
    },
})
export default Screen3;
