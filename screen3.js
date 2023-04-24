import React from 'react';
import { Text,Image,View,StyleSheet } from 'react-native';

class Screen3 extends React.Component {

    render(){
        const img = require('./person.png')
        return(
          <View style={styles.centered}>
            <Image source={img} style={styles.image}></Image>
            <Text style={{color: 'gainsboro'}}>login:</Text>
            <Text style={{color: 'white', fontSize: 26}}>{this.props.route.params.el.name}</Text>
            <Text style={{color: 'gainsboro'}}>password:</Text>
            <Text style={{color: 'white', fontSize: 26}}>{this.props.route.params.el.password}</Text>
            <Text style={{color: 'gainsboro'}}>registered:</Text>
            <Text style={{color: 'white', fontSize: 26}}>{this.props.route.params.el.registered}</Text>
          </View>)
    }
}
const styles = StyleSheet.create({
    centered: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'column',
        marginBottom: 25,
        marginTop: 25,
        flex:.8
    },
    image: {
        width: 160,
        height: 160,
        alignSelf: 'center'
    },
})
export default Screen3;
