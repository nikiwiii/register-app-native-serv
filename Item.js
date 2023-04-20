import React from 'react';
import { Text, Button, View, Image } from 'react-native';

class Item extends React.Component {
    render(){
        return(
        <View>
            <Image></Image>
            <Button title="change" onPress={}></Button>
            <Button title="delete" onPress={}></Button>
            <Text>{this.props.name}</Text>
        </View>)
    }
}

export default Item;