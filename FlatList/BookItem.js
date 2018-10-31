import React, { Component } from 'react'
import {View, Text, StyleSheet, Image, FlatList} from 'react-native'

export default class BookItem extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: this._addKeyToBook(mockBooks)
        }
    }

    _addKeyToBook = books => {
        return books.map(book => {
            return Object.assign(book, {key: title})
        })
    }

    _renderItem = ({item}) => {
        return <BookItem
            coverUrl = {item.data.book_image}
            title = {item.data.title}
            author = {item.author}
        />
    }

    render() {
        return(
            // <View style = {styles.bookItem}>
            //     <Image style = {styles.cover} source = {this.state.book_image}/>
            //     <View style = {styles.info}>
            //         <Text style = {styles.author}>
            //             {this.props.author}
            //         </Text>
            //         <Text style = {styles.title}>
            //             {this.props.title}
            //         </Text>
            //     </View>
            // </View>
            <FlatList data={this.state.data} renderItem={this._renderItem} />
        )
    }
}

const styles = StyleSheet.create({
    bookItem: {
        flexDirection: "row",
        backgroundColor: "#FFFFFF",
        borderBottomColor: "#AAAAAA",
        borderBottomWidth: 2,
        padding: 5,
        height: 175
    },
    cover: {
        flex: 1,
        height: 150,
        resizeMode: "contain"
    },
    info: {
        flex: 3,
        alignItems: "flex-end",
        flexDirection: "column",
        alignSelf: "center",
        padding: 20
    },
    author: {
        fontSize: 18
    },
    title: {
        fontSize: 18,
        fontWeight: "bold"
    }
})

const mockBooks = [
    {
        rank:1,
        title: "GATHERING PREY",
        author: "John Sandford",
        book_image: "http://du.ec2.nytimes.com.s3.amazonaws.com/prd/books/9780399168796.jpg"
    },
    {
        rank:2,
        title: "MEMORY MAN",
        author: "David Baldacci",
        book_image: "http://du.ec2.nytimes.com.s3.amazonaws.com/prd/books/9781455586387.jpg"
    }
]