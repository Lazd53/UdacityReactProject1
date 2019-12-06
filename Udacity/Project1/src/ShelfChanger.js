import React from 'react';

class ShelfChanger extends React.Component {

  createOptions = (currentShelf) => {
    let options = [
      ['currentlyReading', "Currently Reading", false],
      ['wantToRead', "In the Queue", false],
      ['read', "Read", false],
      ['none', "None", false]
    ]

    return options.map(option => (
      <option key={option[0]} value={option[0]}>{option[1]}</option>
      ))
  }

  render(){
    let {moveToShelf, id, currentShelf} = this.props;
    return (
      <div className="book-shelf-changer">
        <select value={currentShelf} onChange={ (event) => moveToShelf({ id: id}, event.target.value)}>
          <option value="move" disabled>Move to...</option>
          {this.createOptions(this.props.currentShelf)}
        </select>
      </div>
    )
  }
}

export default ShelfChanger
