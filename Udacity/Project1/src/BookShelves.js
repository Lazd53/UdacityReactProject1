import React from 'react';
import { Link } from "react-router-dom";
import Shelf from './Shelf';
import BookModal from './BookModal'
import * as BooksAPI from './BooksAPI'

class BookShelves extends React.Component{
  state = {
    books: [],
    modal: false,
    chosenBook: {}
    };

  componentDidMount(){
    BooksAPI.getAll()
      .then((books) => {
        this.setState({books: books});
      });
    }

  openModal = (bookInfo) => {
    this.setState({modal: true, chosenBook: bookInfo})
    console.log(this.state.chosenBook)
  }

  closeModal = () => {
    this.setState({modal: false, chosenBook: {}})
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
              openModal = {this.openModal}
            />
            <Shelf
              shelfName="In the Queue"
              books = {this.filterBookShelf("wantToRead")}
              moveShelf = {this.moveToShelf}
              openModal = {this.openModal}
            />
            <Shelf
              shelfName="Read"
              books = {this.filterBookShelf("read")}
              moveShelf = {this.moveToShelf}
              openModal = {this.openModal}
            />
          </div>
        </div>
        <div className="open-search">
          <Link to = "/search">
            <button>Add a book</button>
          </Link>
        </div>
        {this.state.modal &&
          <BookModal
            closeModal={this.closeModal}
            bookInfo={this.state.chosenBook}
            />
        }
      </div>
    )
  }
}

export default BookShelves;
