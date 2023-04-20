import React from 'react';
import { View, StyleSheet, Pressable, Text } from 'react-native';
import Item from './Item'

class Screen2 extends React.Component {
    goToScr3 = () => {
        this.props.navigation.navigate('details')
    }
    render(){
        console.log(this.props.route.params.users);
        return(<View style={styles.centered}>
            <Pressable style={styles.buttons} onPress={() => this.props.navigation.navigate('log in')}><Text style={{color: 'white'}}>BACK TO LOGIN PAGE</Text></Pressable>
            {
                this.props.route.params.users.forEach(element,i => {
                    return(<Item name={`${i}:${element.name}`} func={this.goToScr3}/>)
                })
            }
            </View>)
    }
}

const styles = StyleSheet.create({
    centered: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column'
    },
    buttons: {
        height: 40,
        marginTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        alignSelf: 'center',
        borderColor: 'white',
        borderBottomWidth: 1,
        backgroundColor: '#2A4494',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    }
});

export default Screen2;