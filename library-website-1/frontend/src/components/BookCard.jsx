import React from 'react';

const BookCard = ({ book }) => (
  <div className="card" style={{ width: '200px', margin: '10px' }}>
    <div className="card-image">
      <figure className="image is-4by5">
        <img src={book.coverImage || '/default-cover.png'} alt={`${book.title} cover`} />
      </figure>
    </div>
    <div className="card-content">
      <p className="title is-6">{book.title}</p>
      <p className="subtitle is-7">by {book.author}</p>
      <p className="is-size-7">{book.description}</p>
      <a href={`/book/${book.id}`} className="button is-link is-small mt-2">View Details</a>
    </div>
  </div>
);

export default BookCard;