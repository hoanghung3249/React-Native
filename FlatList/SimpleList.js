import React, { Component } from 'react'
import {View, StyleSheet, FlatList, Text} from 'react-native'

export default class SimpleFlis extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [
                {key : "a"},
                {key : "b"},
                {key : "c"},
                {key : "d"},
                {key : "this is a long text"},
                {key : "e"},
                {key : "f"},
                {key : "g"}
            ]
        }
    }

    _renderItem = data => {
        return <Text style={styles.row}>
            {data.item.key}
        </Text>
    }

    render() {
        return (
            <View style= {styles.container}>
                <FlatList 
                    data = {this.state.data}
                    renderItem = {this._renderItem}
                />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    },
    row: {
        fontSize: 24,
        padding: 42,
        borderWidth: 1,
        borderColor: "#DDDDDD"
    }
})