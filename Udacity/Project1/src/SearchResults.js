import React from 'react';
import Book from './Book'

const SearchResults = ({results, moveToShelf}) => {
  return (
    <div className="search-books-results">
      <ol className="books-grid">
        { results[0] && results.map((book) => <Book bookInfo = {book} moveToShelf={moveToShelf} key={book.id}/>)}
      </ol>
    </div>

  )
}

export default SearchResults;
