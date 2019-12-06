import React from 'react';
import Book from './Book';


const Shelf = ( {shelfName, books, moveShelf } ) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfName}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          { books.map( (book) => <Book bookInfo={book} key={book.id} moveToShelf={moveShelf} /> )}
        </ol>
      </div>
    </div>
  )
}

export default Shelf;
