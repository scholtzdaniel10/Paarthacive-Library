import express from 'express';
import { uploadBook, getBookDetails, getAllBooks } from '../controllers/bookController.js';

const router = express.Router();

// Route to upload a new book
router.post('/upload', uploadBook);

// Route to get details of a specific book
router.get('/:id', getBookDetails);

// Route to get all books
router.get('/', getAllBooks);

export default router;