import React from "react";
import propTypes from "prop-types";

function Book(props) {
  // const {
  //   volumeInfo: {
  //     title,
  //     imagelinks: {thmbnail}
  //   }
  // } = props.book

  return (
    <div className="book">
      <div className="main">
        <img
          src={props.book.volumeInfo.imageLinks.thumbnail}
          alt={props.book.volumeInfo.title + "book cover"}
        />
        <h2>{props.book.volumeInfo.title}</h2>
      </div>
      {props.iAmOnBookList === true ? (
        <button
          className="add-button"
          onClick={() => props.addBook(props.book.volumeInfo.title)}
        >
          + Add
        </button>
      ) : (
        <button className="remove-button" onClick={() => props.removeBook(props.book.volumeInfo.title)}>X</button>
      )}
    </div>
  );
}

// Book.propTypes = {
//   book: propTypes.shape({
//     volumeInfo: propTypes.shape({
//       title: propTypes.string.isRequired,
//       authors: propTypes.array.isRequired,
//       description: propTypes.string,
//     }),
//     imageLinks: propTypes.shape({
//       smallThumbnail: propTypes.string.isRequired,
//       thumbnail: propTypes.string.isRequired,
//     }),

//     saleInfo: propTypes.shape({
//       retailPrice: propTypes.shape({
//         amount: propTypes.number.isRequired,
//       }),
//     }),
//   }),
// };
// Book.defaultProps = {
//    price: 'No description'
//    };

export default Book;
