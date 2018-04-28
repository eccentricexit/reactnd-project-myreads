import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookGrid from './BookGrid'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends Component{
  state = {
    query: '',
    books:[]
  }

  updateQuery = (query) => {
    if(query){
      BooksAPI.search(query.trim()).then((books) => {
        if(books.constructor === Array){
          this.setState({books:books,query:query.trim()})
        }else{
          this.setState({books:[],query:query.trim()})
        }
      })
    }else{
      this.setState({books: [],query:''})
    }
  }

  render(){
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className='close-search'>Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <BookGrid
            books={this.state.books}
            onUpdateBook={this.props.onUpdateBook}
            />
        </div>
      </div>
    )
  }
}

export default SearchBooks
