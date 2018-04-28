import React, {Component} from 'react'
import Book from './Book'

class BookGrid extends Component{
  render(){
    const { books } = this.props
    return (
      <ol className="books-grid">
        {books.length>0 &&
          (
            books.map((book) => (
              <li key={book.id}>
                <Book book={book} onUpdateBook={this.props.onUpdateBook}/>
              </li>)
            )
          )
        }

      </ol>
    )
  }
}

export default BookGrid
