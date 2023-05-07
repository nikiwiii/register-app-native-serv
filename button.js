import React from 'react'
import { Pressable, Text } from 'react-native'

class MyButton extends React.Component {
    render() {
        return(
            <Pressable style={this.props.styles.buttons} onPress={this.props.func}>
                <Text style={this.props.styles.text}>{this.props.text}</Text>
            </Pressable>
        )
    }
}
export default MyButton;