import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import SimpleList from "./SimpleList"
import BookItem from "./BookItem"

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <SimpleList/> */}
        <BookItem/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
