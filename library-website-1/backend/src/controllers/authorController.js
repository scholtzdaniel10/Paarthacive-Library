import Author from '../models/author';

// Create a new author
export const createAuthor = async (req, res) => {
  try {
    const { name, bio } = req.body;
    const newAuthor = new Author({ name, bio });
    await newAuthor.save();
    res.status(201).json(newAuthor);
  } catch (error) {
    res.status(500).json({ message: 'Error creating author', error });
  }
};

// Get author details by ID
export const getAuthorById = async (req, res) => {
  try {
    const author = await Author.findById(req.params.id);
    if (!author) {
      return res.status(404).json({ message: 'Author not found' });
    }
    res.status(200).json(author);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving author', error });
  }
};