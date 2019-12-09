import React from 'react';
import Book from './Book'

const SearchResults = ({results, moveToShelf, openModal, noResultsMsg}) => {
  return (
    <div className="search-books-results">
      {noResultsMsg && <div>
          <h2> We're sorry! </h2>
          <p> This term doesn't seem to be getting any results, please try another.</p>
        </div>
      }
      <ol className="books-grid">
        { results[0] && results.map((book) => (
          <Book
            bookInfo = {book}
            moveToShelf={moveToShelf}
            key={book.id}
            openModal={openModal}
          />
        ))}
      </ol>
    </div>

  )
}

export default SearchResults;
