import React from 'react';
import { View, StyleSheet, Pressable, Text, FlatList, DeviceEventEmitter } from 'react-native';
import ListItem from './Item'

class Screen2 extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      people: []
    }
  }

  async componentDidMount() {
        this.refresh()
          DeviceEventEmitter.addListener('refresh', () => {this.refresh()})
   }

   async refresh() {
    try {
        const response = await fetch(this.props.route.params.adres + this.props.route.params.port + '/people',);
        const json = await response.json();
        this.setState({
            people: json
        });
      } catch (error) {
        console.error(error);
      }
   }

    goToScr3 = (el) => {
        this.props.navigation.navigate('details', { el })
    }
    render(){
        var index = 0
        return(<View style={styles.centered}>
                <Pressable style={styles.buttons} onPress={() => this.props.navigation.navigate('log in')}><Text style={styles.text}>BACK TO LOGIN PAGE</Text></Pressable> 
                <FlatList
                    data={this.state.people}
                    index={index}
                    renderItem={({item}) => <ListItem var={item} name={item.name} func={() => this.goToScr3(item)} deleteLink={this.props.route.params.adres + this.props.route.params.port + '/delete'} />}
                    keyExtractor={item => this.state.people.indexOf(item)}
                />
            </View>)
    }
}

const styles = StyleSheet.create({
    centered: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#162100'
    },
    list: {
        flex: .9,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    buttons: {
        height: 40,
        alignSelf: 'center',
        borderColor: 'transparent',
        borderBottomWidth: 1,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    text: {
        color: '#4b7000',
        fontWeight: 'bold',
        fontSize: 32
    }
});

export default Screen2;
