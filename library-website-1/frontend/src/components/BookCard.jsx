import React from 'react';

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <img src={book.coverImage} alt={`${book.title} cover`} className="book-cover" />
      <h2 className="book-title">{book.title}</h2>
      <p className="book-author">by {book.author}</p>
      <p className="book-description">{book.description}</p>
      <a href={`/books/${book.id}`} className="book-details-link">View Details</a>
    </div>
  );
};

export default BookCard;