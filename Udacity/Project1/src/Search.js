import React from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';

import SearchResults from './SearchResults';

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

  render(){
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to = "/">
            <button className="close-search">Close</button>
          </Link>
          <form className="search-books-input-wrapper" onSubmit={(e) => e.preventDefault()}>
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input type="text"
              value={this.state.searchValue}
              onChange={(e) => this.inputChange(e.target.value)}
              placeholder="Search by title or author"
            />
          </form>
        </div>
        <SearchResults results={this.state.searchResults}/>
      </div>
    )
  }
}

export default Search;
