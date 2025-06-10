import React from 'react';
import Navbar from '../components/Navbar';
import BookCard from '../components/BookCard';

const Home = () => {
  const books = [
    { id: 1, title: 'Book Title 1', author: 'Author 1', description: 'Description of Book 1', coverImage: '/default-cover.png' },
    { id: 2, title: 'Book Title 2', author: 'Author 2', description: 'Description of Book 2', coverImage: '/default-cover.png' },
    { id: 3, title: 'Book Title 3', author: 'Author 3', description: 'Description of Book 3', coverImage: '/default-cover.png' },
  ];

  return (
    <div>
      <Navbar />
      <section className="section">
        <div className="container">
          <h1 className="title">Welcome to the Library</h1>
          <h2 className="subtitle">Most Viewed</h2>
          <div className="columns is-multiline">
            {books.map(book => (
              <div className="column is-one-quarter" key={book.id}>
                <BookCard book={book} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;