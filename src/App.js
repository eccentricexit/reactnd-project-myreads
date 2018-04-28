import React from 'react'
import { Route } from 'react-router-dom'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
      books: []
  }

  updateBookShelf(book,shelf){
    BooksAPI.update(book,shelf)
    .then((response) => {
      let _book = this.state.books.filter((b) => b.id===book.id)[0]
      _book.shelf = shelf
      let {books} = this.state
      this.setState({books})
    })
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  render() {
    console.info('books: ',this.state.books)
    return (
      <div className="app">
        <Route exact path='/' render={() => (
            <ListBooks
              books={this.state.books}
              onUpdateBook={(book,shelf) => {
                this.updateBookShelf(book,shelf)                
              }}
              />
        )}/>
        <Route exact path='/search' render={({history}) => (
            <SearchBooks
              onUpdateBook={(book,shelf) => {
              this.updateBookShelf(book,shelf)
            }}/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
