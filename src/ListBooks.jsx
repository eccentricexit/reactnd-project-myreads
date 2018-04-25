import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'
import * as BooksAPI from './BooksAPI'

class ListBooks extends  Component{
  state = {
    books:[]
  }

  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  render() {
    const {books} = this.state
    let currentlyReading = books.filter((book)=>book.shelf==='currentlyReading')
    let wantToRead = books.filter((book)=>book.shelf==='wantToRead')
    let read = books.filter((book) => book.shelf ==='read')

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf
              title="Currently Reading"
              books={currentlyReading}
              onUpdateBook={this.props.onUpdateBook}
              />

            <BookShelf
              title="Want to Read"
              books={wantToRead}
              onUpdateBook={this.props.onUpdateBook}
              />

            <BookShelf
              title="Read"
              books={read}
              onUpdateBook={this.props.onUpdateBook}
              />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
  }
}

export default ListBooks
