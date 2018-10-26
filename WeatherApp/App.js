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

export default class App extends Component {

  constructor(props) {
    super(props);
    //Create variable
    this.state = {zip: "", forecast: null};
  }

  //Function to handle text change
  _handleTextChange = event => {
    const zip = event.nativeEvent.text
    this.setState({zip: event.nativeEvent.text});
    OpenWeatherMap.fetchForecast(zip).then(forecast => {
      console.log(forecast)
      this.setState({forecast: forecast})
    })
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
      {content}
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
    backgroundColor: '#666666',
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
