import React from 'react';
import Navbar from '../components/Navbar';
import BookCard from '../components/BookCard';

const Home = () => {
  const books = [
    // Sample book data
    { id: 1, title: 'Book Title 1', author: 'Author 1', description: 'Description of Book 1' },
    { id: 2, title: 'Book Title 2', author: 'Author 2', description: 'Description of Book 2' },
    { id: 3, title: 'Book Title 3', author: 'Author 3', description: 'Description of Book 3' },
  ];

  return (
    <div>
      <Navbar />
      <h1>Welcome to the Library</h1>
      <h2>Available Books</h2>
      <div className="book-list">
        {books.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Home;