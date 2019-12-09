import React from 'react';
import * as BooksAPI from './BooksAPI';

import SearchResults from './SearchResults';
import SearchBar from './SearchBar';
import BookModal from './BookModal';

class Search extends React.Component {
  state = {searchValue:'',
          searchResults: [],
          modal: false,
          chosenBook: {},
          userBooks: {},
          noResultsMsg: false
        };

  componentDidMount(){
    this.getUserBooks();
  }

  getUserBooks = async () => {
    BooksAPI.getAll()
      .then((books) => {
        this.setState({userBooks: books});
      });
    }

  openModal = (bookInfo) => {
    this.setState({modal: true, chosenBook: bookInfo})
  }

  closeModal = () => {
    this.setState({modal: false, chosenBook: {}})
  }

  inputChange = (newValue) => {
    this.setState({searchValue: newValue});
    if (newValue === ""){
      this.setState({searchResults: []})
    }else {
      this.searchDB(newValue)
    }
  }

  searchDB = (query) => {
    BooksAPI.search(query)
      .then((results) => {
        query === this.state.searchValue &&
          this.validateDBSearch(results)} );
  }

  validateDBSearch = (results) => {
    if ( results.hasOwnProperty("error")){
      this.setState({searchResults: [], noResultsMsg: true})
    }else{
      results = this.addShelfInformation(results);
      this.setState({searchResults: results, noResultsMsg: false})
    }
  }

  addShelfInformation = (validatedResults) => {
    let shelfResults = validatedResults.map (book => {
      let matchingBook = this.state.userBooks.filter(userBook => userBook.id === book.id)
      matchingBook.length>0 ?
        book.shelf = (matchingBook[0].shelf) :
        book.shelf = "none";
      return book});
    return shelfResults
  }

  moveToShelf = (bookID, newShelf) => {
    BooksAPI.update(bookID, newShelf);
    this.setState( (currState) => ({
      searchResults: currState.searchResults.map( result => {
        if (result.id === bookID.id){
          result.shelf = newShelf;
        }
        return result
      })
    }))
    }

  render(){
    return (
      <div className="search-books">
        <SearchBar
          currentValue = {this.state.searchValue}
          changeInput={this.inputChange}
        />
        <SearchResults
          moveToShelf={this.moveToShelf}
          results={this.state.searchResults}
          openModal={this.openModal}
          noResultsMsg={this.state.noResultsMsg}
        />
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

export default Search;
