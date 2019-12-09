import React from 'react';
import ShelfChanger from './ShelfChanger';

class Book extends React.Component {

  choosebackgroundImage(){
    if (!this.props.bookInfo.hasOwnProperty("imageLinks")){
      return <div className="book-cover" style={{ width: 128, height: 193 }}></div>
    } else if (this.props.bookInfo.imageLinks.hasOwnProperty("smallThumbnail")){
      return <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.bookInfo.imageLinks.smallThumbnail})` }}></div>
    }else if(this.props.bookInfo.imageLinks.hasOwnProperty("thumbnail")){
      return <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.bookInfo.imageLinks.thumbnail})` }}></div>
    }else {
      return <div className="book-cover" style={{ width: 128, height: 193 }}></div>
     }
  }

  shelfStatus = () => {
    let options = {
      currentlyReading: "Reading",
      wantToRead: "Queue",
      read: "Read"
    }
    return options[this.props.bookInfo.shelf]
  }

  render(){
    let {bookInfo} = this.props;
    return (
      <li className="book">
        <div className="book-top" onClick={() => this.props.openModal(this.props.bookInfo)}>
          {this.choosebackgroundImage()}
          {bookInfo.shelf !=="none" &&
            <div className='book-shelf'>
              <p className='book-shelf-status'>{this.shelfStatus()}</p>
            </div>
          }
        </div>
        <ShelfChanger
          moveToShelf={this.props.moveToShelf}
          id={bookInfo.id}
          currentShelf={bookInfo.shelf}
        />
        <div className="book-title">{bookInfo.title}</div>
        <div className="book-subtitle">{bookInfo.subtitle}</div>
        {this.props.bookInfo.hasOwnProperty("authors") && <div className="book-authors">{bookInfo.authors.join(", ")}</div>}
      </li>
    )
  }

}

export default Book;
