import React from 'react';

const AuthorProfile = ({ author }) => {
  return (
    <div className="author-profile">
      <h2>{author.name}</h2>
      <p>{author.bio}</p>
      <h3>Books by {author.name}</h3>
      <ul>
        {author.books.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default AuthorProfile;