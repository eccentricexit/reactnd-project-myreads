import React, {Component} from 'react'
import Book from './Book'

class BookGrid extends Component {
  render () {
    const { books, userBooks } = this.props
    return (
      <ol className='books-grid'>
        {books.length > 0 && (
            books.map((book) => {
              let userBook
              if (userBooks) {
                userBook = userBooks.filter(b => b.id === book.id)[0]
              }
              if (userBook) {
                book = userBook
              }

              return (
                <li key={book.id}>
                  <Book
                    book={book}
                    onUpdateBook={this.props.onUpdateBook}
                    />
                </li>
              )
            }
            )
          )
        }
      </ol>
    )
  }
}

export default BookGrid
