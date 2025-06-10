import express from 'express';
import { createAuthor, getAuthor, updateAuthor, deleteAuthor } from '../controllers/authorController.js';

const router = express.Router();

// Route to create a new author
router.post('/', createAuthor);

// Route to get author details
router.get('/:id', getAuthor);

// Route to update author details
router.put('/:id', updateAuthor);

// Route to delete an author
router.delete('/:id', deleteAuthor);

export default router;