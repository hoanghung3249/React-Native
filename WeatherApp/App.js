/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput} from 'react-native';
import Forecast from "./Forecast"
import OpenWeatherMap from "./open_weather_map"

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  constructor(props) {
    super(props);
    //Create variable
    this.state = {zip: "", forecast: null};
  }

  //Function to handle text change
  _handleTextChange = event => {
    this.setState({zip: event.nativeEvent.text});
  };

  render() {
    let content = null;
    if (this.state.forecast !== null) {
      content = (
        <Forecast 
          main= {this.state.forecast.main}
          description = {this.state.forecast.description}
          temp = {this.state.forecast.temp}
        />
      )
    }
    return (
      <View style={styles.container}>
      <Text style = {styles.welcome}>
        Your input {this.state.zip}
      </Text>
      <TextInput style={styles.input} 
      onSubmitEditing ={this._handleTextChange}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  input: {
    fontSize: 20,
    borderWidth: 2,
    height: 40,
    width: 100
  }
});
