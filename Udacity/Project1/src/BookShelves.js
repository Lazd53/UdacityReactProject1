import React from 'react';
import { Link } from "react-router-dom";
import Shelf from './Shelf';
import * as BooksAPI from './BooksAPI'

class BookShelves extends React.Component{
  state = {books: []
          };

  componentDidMount(){
    BooksAPI.getAll()
      .then((books) => {
        this.setState({books: books});
      });
    }

  filterBookShelf = (shelf) =>{
    let allBooks = this.state.books;
    return  allBooks.filter((book) => book.shelf === shelf);
  }

  moveToShelf = async (bookID, newShelf) => {
    await BooksAPI.update(bookID, newShelf);
    BooksAPI.getAll()
      .then((books) => {
        this.setState({books: books});
      });
    }

  render(){
    return (
      <div className="list-books">
        <div className="list-books-content">
          <div>
            <Shelf
              shelfName="Currently Reading"
              books = {this.filterBookShelf("currentlyReading")}
              moveShelf = {this.moveToShelf}
            />
            <Shelf
              shelfName="In the Queue"
              books = {this.filterBookShelf("wantToRead")}
              moveShelf = {this.moveToShelf}
            />
            <Shelf
              shelfName="Read"
              books = {this.filterBookShelf("read")}
              moveShelf = {this.moveToShelf}
            />
          </div>
        </div>
        <div className="open-search">
          <Link to = "/search">
            <button>Add a book</button>
          </Link>
        </div>
      </div>
    )
  }
}

export default BookShelves;
