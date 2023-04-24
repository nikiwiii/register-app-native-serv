import Screen1 from './screen1'
import Screen2 from './screen2'
import Screen3 from './screen3'
import React from 'react';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [
      {name: 'janusz', password: 'jajaja', registered: new Date().toLocaleString()},
      {name: 'krzysztof', password: 'ajaja', registered: new Date().toLocaleString()},
      {name: 'janusz', password: 'jajaja', registered: new Date().toLocaleString()},
      {name: 'janusz', password: 'jajaja', registered: new Date().toLocaleString()},
      {name: 'krzysztof', password: 'ajaja', registered: new Date().toLocaleString()},
      {name: 'janusz', password: 'jajaja', registered: new Date().toLocaleString()},
    ]
    }
  }

  addUser = (name,pass) => {
    this.setState({
      people: this.state.people.push({name: name, password: pass, registered: new Date().toLocaleString()})
    })
  }

  // componentDidMount() {
  //   fetch('/people')
  //     .then(res => {
  //         console.log(res);
  //         return res.json()
  //      })
  //     .then(users => { 
  //         console.log(users); 
  //         this.setState({ people: users })
  //      });
  //  }

  render() {
    return (
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="log in"
          component={Screen1}
          options={{title: 'Register'}}/>

        <Stack.Screen
          name="list"
          component={Screen2}
          options={{title: 'User list'}}
          initialParams={{users: this.state.people, addUser: this.addUser}}/>

        <Stack.Screen
          name="details"
          component={Screen3}
          options={{title: 'Details'}}/>
      </Stack.Navigator>
    </NavigationContainer>
    )
  }
}

export default App;
