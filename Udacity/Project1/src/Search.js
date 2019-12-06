import React from 'react';
import * as BooksAPI from './BooksAPI';

import SearchResults from './SearchResults';
import SearchBar from './SearchBar'

class Search extends React.Component {
  state = {searchValue:'',
          searchResults: []};


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
      .then((results) => this.validateDBSearch(results) );
  }

  validateDBSearch = (results) => {
    if ( results.hasOwnProperty("error")){
      this.setState({searchResults: []})
    }else{
      this.setState({searchResults: results})
    }
  }

  moveToShelf = async (bookID, newShelf) => {
    BooksAPI.update(bookID, newShelf);
    }

  render(){
    return (
      <div className="search-books">
        <SearchBar currentValue = {this.state.value} changeInput={this.inputChange}/>
        <SearchResults moveToShelf={this.moveToShelf} results={this.state.searchResults}/>
      </div>
    )
  }
}

export default Search;
