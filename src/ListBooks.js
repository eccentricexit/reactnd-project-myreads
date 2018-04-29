import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

class ListBooks extends Component {
  render () {
    const {books} = this.props    

    const shelves = {
        currentlyReading: ['Currently Reading', 'currentlyReading'],
        wantToRead: ['Want to Read', 'wantToRead'],
        read: ['Read', 'read']
      }

    return (
      <div className='list-books'>
        <div className='list-books-title'>
          <h1>MyReads</h1>
        </div>
        <div className='list-books-content'>
        { Object.keys(shelves).map((shelf) =>
          <BookShelf key={shelf}
            title={shelves[shelf][0]}
            books={books.filter((book) => book.shelf === shelves[shelf][1])}
            onUpdateBook={this.props.onUpdateBook}
          />
        )}
          </div>
        </div>
        <div className='open-search'>
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    )
  }
}

export default ListBooks
