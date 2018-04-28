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
      let {books} = this.state
      let _book = books.filter((b) => b.id===book.id)[0]
      if(_book){
        _book.shelf = shelf
      }else{
        books = books.concat([book])
      }

      this.setState({books})
    })
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  render() {
    let {books} = this.state

    return (
      <div className="app">
        <Route exact path='/' render={() => (
            <ListBooks
              books={books}
              onUpdateBook={(book,shelf) => {
                this.updateBookShelf(book,shelf)
              }}
              />
        )}/>
        <Route exact path='/search' render={({history}) => (
            <SearchBooks
              books={books}
              onUpdateBook={(book,shelf) => {
              this.updateBookShelf(book,shelf)
            }}/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
