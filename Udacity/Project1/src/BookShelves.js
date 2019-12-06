import React from 'react';
import Shelf from './Shelf';
import * as BooksAPI from './BooksAPI'

class BookShelves extends React.Component{
  state = {currentlyReading: [],
            toRead: [],
            read: []
          };

  componentDidMount(){
    BooksAPI.getAll()
      .then((books) => {
        let currentlyReading = books.filter((book) => book.shelf === "currentlyReading");
        let toRead = books.filter ((book) => book.shelf === "wantToRead");
        let read = books.filter ((book) => book.shelf === "read");
        this.setState({currentlyReading: currentlyReading, toRead: toRead, read: read})
      });

  }

  render(){
    return (
      <div className="list-books">
        <div className="list-books-content">
          <div>
            <Shelf
              shelfName="Currently Reading"
              books = {this.state.currentlyReading}
            />
            <Shelf
              shelfName="In the Queue"
              books = {this.state.toRead}
            />
            <Shelf
              shelfName="Read"
              books = {this.state.read}
            />

          </div>
        </div>
        <div className="open-search">
          <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
        </div>
      </div>
    )
  }
}

export default BookShelves;
