// filepath: library-website/backend/src/controllers/bookController.js
import Book from '../models/book.js';

// Function to upload a new book
export const uploadBook = async (req, res) => {
  try {
    const { title, author, description } = req.body;
    const newBook = new Book({
      title,
      author,
      description,
      file: req.file.path, // Assuming file upload is handled and path is stored
    });
    await newBook.save();
    res.status(201).json({ message: 'Book uploaded successfully', book: newBook });
  } catch (error) {
    res.status(500).json({ message: 'Error uploading book', error: error.message });
  }
};

// Function to retrieve book details
export const getBookDetails = async (req, res) => {
  try {
    const bookId = req.params.id;
    const book = await Book.findById(bookId);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving book details', error: error.message });
  }
};

// Function to retrieve all books
export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving books', error: error.message });
  }
};