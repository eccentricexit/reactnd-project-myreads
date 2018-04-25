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
    BooksAPI.update(book,shelf).then((response) => {      
      this.setState((state) => {
        let ref = state.books.filter((b) => b.id===book.id)[0]
        ref.shelf = shelf
      })
    })
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={({history}) => (
            <ListBooks
              books={this.state.books}
              onUpdateBook={(book,shelf) => {
                this.updateBookShelf(book,shelf)
                history.push('/')
              }}
              />
        )}/>
        <Route exact path='/search' render={() => (
            <SearchBooks />
        )}/>
      </div>
    )
  }
}

export default BooksApp
