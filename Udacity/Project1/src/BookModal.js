import React from 'react';

class BookModal extends React.Component {

  choosebackgroundImage(){
    console.log(this.props)
    if (!this.props.bookInfo.hasOwnProperty("imageLinks")){
      return <div className="book-cover" ></div>
    } else if(this.props.bookInfo.imageLinks.hasOwnProperty("thumbnail")){
      return <div className="book-cover" style={{ backgroundImage: `url(${this.props.bookInfo.imageLinks.thumbnail})` }}></div>
    } else if (this.props.bookInfo.imageLinks.hasOwnProperty("smallThumbnail")){
      return <div className="book-cover" style={{ backgroundImage: `url(${this.props.bookInfo.imageLinks.smallThumbnail})` }}></div>
    }else {
      return <div className="book-cover" ></div>
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
    let bookInfo = this.props.bookInfo;
    console.log(bookInfo)
    return (
      <div className="modal-background">
        <div className="modal-book">
          {this.choosebackgroundImage()}
          <div className="book-title">{bookInfo.title}</div>
          <div className="book-subtitle">{bookInfo.subtitle}</div>
          {this.props.bookInfo.hasOwnProperty("authors") && <div className="book-authors">{bookInfo.authors.join(", ")}</div>}
          <div className="modal-book-description">Description:
            <p className="modal-book-description-text">{bookInfo.description}</p>
          </div>
          {bookInfo.hasOwnProperty('categories') &&
            bookInfo.categories.map( category => <div className="modal-book-categories">{category}</div> )
          }
        </div>
      </div>

    )
  }

}

export default BookModal;
