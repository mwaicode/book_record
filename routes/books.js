// // routes/books.js

// const express = require('express');
// const router = express.Router();
// const { Book } = require('../models');

// /**
//  * @route   GET /api/books
//  * @desc    Retrieve all books
//  * @access  Public
//  */
// router.get('/', async (req, res) => {
//   try {
//     const books = await Book.findAll();
//     res.json(books);
//   } catch (error) {
//     console.error('Error fetching books:', error);
//     res.status(500).json({ message: 'Server Error', error: error.message });
//   }
// });

// /**
//  * @route   POST /api/books
//  * @desc    Create a new book
//  * @access  Public
//  */
// router.post('/', async (req, res) => {
//   try {
//     const { book_name } = req.body;

//     // Validate request
//     if (!book_name) {
//       return res.status(400).json({ message: 'Book name is required' });
//     }

//     // Create new book
//     const newBook = await Book.create({ book_name });
//     res.status(201).json(newBook);
//   } catch (error) {
//     console.error('Error creating book:', error);
//     res.status(500).json({ message: 'Server Error', error: error.message });
//   }
// });

// /**
//  * @route   GET /api/books/:idbook
//  * @desc    Retrieve a single book by ID
//  * @access  Public
//  */
// router.get('/:idbook', async (req, res) => {
//   try {
//     const { idbook } = req.params;

//     const book = await Book.findByPk(idbook);

//     if (!book) {
//       return res.status(404).json({ message: 'Book not found' });
//     }

//     res.json(book);
//   } catch (error) {
//     console.error('Error fetching book:', error);
//     res.status(500).json({ message: 'Server Error', error: error.message });
//   }
// });

// /**
//  * @route   PUT /api/books/:idbook
//  * @desc    Update an existing book by replacing it
//  * @access  Public
//  */
// router.put('/:idbook', async (req, res) => {
//   try {
//     const { idbook } = req.params;
//     const { book_name } = req.body;

//     // Validate request
//     if (!book_name) {
//       return res.status(400).json({ message: 'Book name is required' });
//     }

//     // const book = await Book.findByPk(idbook);
//     const newBook = await Book.create({ book_name });

//     if (!book) {
//       return res.status(404).json({ message: 'Book not found' });
//     }

//     // Update book
//     book.book_name = book_name;
//     await book.save();

//     res.json(book);
//   } catch (error) {
//     console.error('Error updating book:', error);
//     res.status(500).json({ message: 'Server Error', error: error.message });
//   }
// });

// /**
//  * @route   PATCH /api/books/:idbook
//  * @desc    Update an existing book partially
//  * @access  Public
//  */
// router.patch('/:idbook', async (req, res) => {
//   try {
//     const { idbook } = req.params;
//     const { book_name } = req.body;

//     const book = await Book.findByPk(idbook);

//     if (!book) {
//       return res.status(404).json({ message: 'Book not found' });
//     }

//     // Update only provided fields
//     if (book_name) book.book_name = book_name;
//     await book.save();

//     res.json(book);
//   } catch (error) {
//     console.error('Error updating book:', error);
//     res.status(500).json({ message: 'Server Error', error: error.message });
//   }
// });

// /**
//  * @route   DELETE /api/books/:idbook
//  * @desc    Delete a book by ID
//  * @access  Public
//  */
// router.delete('/:idbook', async (req, res) => {
//   try {
//     const { idbook } = req.params;

//     const book = await Book.findByPk(idbook);

//     if (!book) {
//       return res.status(404).json({ message: 'Book not found' });
//     }

//     // Delete book
//     await book.destroy();

//     res.json({ message: 'Book deleted successfully' });
//   } catch (error) {
//     console.error('Error deleting book:', error);
//     res.status(500).json({ message: 'Server Error', error: error.message });
//   }
// });

// module.exports = router;
const express = require('express');
const router = express.Router();
const { Book } = require('../models'); // Assuming the model is defined in models folder

// GET all books
router.get('/', async (req, res) => {
  try {
    const books = await Book.findAll();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve books' });
  }
});

// POST a new book
router.post('/', async (req, res) => {
  try {
    const { book_name } = req.body;
    const newBook = await Book.create({ book_name });
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create book' });
  }
});

// DELETE a book

router.delete('/:idbook', async (req, res) => {
  try {
    const idbook = req.params.idbook;
    const result = await Book.destroy({ where: { idbook } });
    if (result) {
      res.status(200).send({ message: 'Book deleted successfully' });
    } else {
      res.status(404).send({ error: 'Book not found' });
    }
  } catch (err) {
    res.status(500).send({ error: 'Failed to delete book' });
  }
});


// PUT to update a book

router.put('/:idbook', async (req, res) => {
  try {
    const idbook = req.params.idbook;
    const { book_name } = req.body;
    const result = await Book.update({ book_name }, { where: { idbook } });
    if (result[0]) {
      res.status(200).send({ message: 'Book updated successfully' });
    } else {
      res.status(404).send({ error: 'Book not found' });
    }
  } catch (err) {
    res.status(500).send({ error: 'Failed to update book' });
  }
});


// PATCH to partially update a book
router.patch('/:idbook', async (req, res) => {
  try {
    const idbook = req.params.idbook;
    const updateData = req.body;
    const result = await Book.update(updateData, { where: { idbook } });
    if (result[0]) {
      res.status(200).send({ message: 'Book updated successfully' });
    } else {
      res.status(404).send({ error: 'Book not found' });
    }
  } catch (err) {
    res.status(500).send({ error: 'Failed to update book' });
  }
});

module.exports = router;
