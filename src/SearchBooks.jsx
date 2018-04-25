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
    this.setState({ query: query.trim() })

    if(this.state.query){
      BooksAPI.search(this.state.query).then((books) => {
        this.setState({ books })
      })
    }else{
      this.setState({books:[]})
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
          <BookGrid books={this.state.books} />
        </div>
      </div>
    )
  }
}

export default SearchBooks
