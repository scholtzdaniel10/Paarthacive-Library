import React, { useState } from 'react';

const UploadForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('author', author);
    formData.append('file', file);

    try {
      const response = await fetch('/api/books/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setMessage('Book uploaded successfully!');
        setTitle('');
        setAuthor('');
        setFile(null);
      } else {
        setMessage('Failed to upload book. Please try again.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Upload Your Book</h2>
      <div>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Author:
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Upload File:
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            required
          />
        </label>
      </div>
      <button type="submit">Upload</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default UploadForm;