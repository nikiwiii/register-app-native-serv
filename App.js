import screen1 from './screen1'
import screen2 from './screen2'
import screen3 from './screen3'
import { StyleSheet, NavigationContainer } from 'react-native';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="log in"
          component={screen1}
          options={{title: 'Welcome'}}/>

        <Stack.Screen
          name="list"
          component={screen2}
          options={{title: 'Welcome'}}/>

        <Stack.Screen
          name="details"
          component={screen3}
          options={{title: 'Welcome'}}/>
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  div: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '24.44%',
    height: '10.75%',
    backgroundColor: 'rgba(0, 0, 0, .1)',
    borderRadius: 10,
    margin: 1
  },
  divText: {
    color: "lightgrey",
    fontSize: 20
  },
  bar1: {
    width: '100%',
    height: '25%',
    borderTopColor: "aliceblue",
    display: "flex",
    justifyContent: "flex-end"
  },
  bar1Text: {
    fontSize: 25,
    textAlign: "center",
    color: "silver"
  },
  bar2Text: {
    fontSize: 30,
    textAlign: "center",
    color: "white"
  },
  bar2: {
    width: '100%',
    height: '20%',
    borderTopColor: "aliceblue",
    borderBottomColor: "transparent",
    borderWidth: .2,
    fontSize: 20,
  },
  divoff: {
    width: '24%',
    height: '10.75%',
    margin: 1,
    opacity: 0
  },
  divCDel: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '49.4%',
    height: '10.75%',
    backgroundColor: 'rgba(0, 0, 0, .1)',
    borderRadius: 10,
    margin: 1
  },
});

const stylesland = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  div: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '16.4%',
    height: '14.9%',
    backgroundColor: 'rgba(0, 0, 0, .1)',
    borderRadius: 10,
    margin: 1
  },
  divText: {
    color: "lightgrey",
    fontSize: 20
  },
  bar1: {
    width: '100%',
    height: '17.5%',
    borderTopColor: "aliceblue",
    justifyContent: "flex-end"
  },
  divoff: {
    width: '16.4%',
    height: '14.9%',
    margin: 1,
    opacity: 0
  },
  divCDel: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '33.05%',
    height: '14.9%',
    backgroundColor: 'rgba(0, 0, 0, .1)',
    borderRadius: 10,
    margin: 1
  },
});

export default App;