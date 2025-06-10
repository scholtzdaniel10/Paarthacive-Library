import React, { useEffect, useState } from 'react';
import UploadForm from '../components/UploadForm';
import BookCard from '../components/BookCard';

const AuthorDashboard = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch('/api/books'); // Adjust the API endpoint as needed
      const data = await response.json();
      setBooks(data);
    };

    fetchBooks();
  }, []);

  return (
    <div>
      <h1>Author Dashboard</h1>
      <UploadForm />
      <h2>Your Books</h2>
      <div className="book-list">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default AuthorDashboard;