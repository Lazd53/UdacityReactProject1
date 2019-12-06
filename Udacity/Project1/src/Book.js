import React from 'react';
import { Link } from 'react-router-dom';

class Book extends React.Component {
  constructor(props){
    super(props)
    console.log(this.props.bookInfo)
  }
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

  render(){
    let bookInfo = this.props.bookInfo;
    return (
      <li className="book">
        <div className="book-top">
          <Link to={`/books/${bookInfo.id}`}>
            {this.choosebackgroundImage()}
            <div className="book-shelf-changer">
              <select>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </Link>
        </div>
        <div className="book-title">{bookInfo.title}</div>
        <div className="book-subtitle">{bookInfo.subtitle}</div>
        {this.props.bookInfo.hasOwnProperty("authors") && <div className="book-authors">{bookInfo.authors.join(", ")}</div>}
      </li>
    )
  }

}

export default Book;
