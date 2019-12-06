import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import { Route } from 'react-router-dom';
import Search from './Search';
import BookShelves from './BookShelves';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    highlightedBook: {}
  }



  render() {
    return (
      <div className="app">
      <header className="list-books-title">
        <h1>MyReads</h1>
      </header>
        <Route path="/search">
          <Search/>
        </Route>
        <Route exact path = "/">
          <BookShelves/>
        </Route>
        <Route path = '/books'>
          <div>Test</div>
        </Route>
      </div>
    )
  }
}

export default BooksApp
