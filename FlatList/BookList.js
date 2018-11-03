import React, { Component } from 'react';
import {View, Text, StyleSheet, FlatList, Image} from "react-native"
import BookItem from "./BookItem"

export default class BookList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: this._addKeyToBook(mockBooks)
        }
    }

    _addKeyToBook = books => {
        return books.map(book => {
            return Object.assign(book, {key: book.title})
        })
    }

    _renderItem = ({item}) => {
        return <BookItem
            coverUrl = {item.book_image}
            title = {item.key}
            author = {item.author}
        />
    }

    render() {
        return <FlatList data={this.state.data} renderItem={this._renderItem}/>
    }

}

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