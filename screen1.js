import React from 'react';
import { View, Button, TextField } from 'react-native';

class screen1 extends React.Component {
    render(){
        return(<View>
            <TextField label="name" variant="filled" />
            <TextField label="password" variant="filled" />
            <Button
            title="register"
            onPress={() =>
              navigation.navigate('list')
            }
          /></View>)
    }
}

export default screen1;