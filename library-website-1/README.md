# Library Website Project

This project is a library website that allows authors to upload their novels and short stories. It consists of a backend built with Node.js and Express, and a frontend built with React.

## Project Structure

```
library-website
├── backend
│   ├── src
│   │   ├── controllers
│   │   ├── models
│   │   ├── routes
│   │   ├── middleware
│   │   ├── utils
│   │   └── app.js
│   ├── package.json
│   └── README.md
├── frontend
│   ├── public
│   ├── src
│   │   ├── assets
│   │   ├── components
│   │   ├── pages
│   │   ├── styles
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── README.md
└── README.md
```

## Backend

The backend is responsible for handling API requests related to authors and books. It includes:

- **Controllers**: Functions to handle requests for authors and books.
- **Models**: Mongoose schemas for authors and books.
- **Routes**: Express routes for handling HTTP requests.
- **Middleware**: Authentication middleware to protect certain routes.
- **Utilities**: Functions for handling file uploads.

### Setup Instructions

1. Navigate to the `backend` directory.
2. Install dependencies:
   ```
   npm install
   ```
3. Start the server:
   ```
   npm start
   ```

## Frontend

The frontend is a React application that provides a user interface for authors to manage their books. It includes:

- **Components**: Reusable UI components such as Navbar, BookCard, and UploadForm.
- **Pages**: Different pages for Home, Login, Register, Author Dashboard, and Book Details.
- **Styles**: CSS styles for the application.

### Setup Instructions

1. Navigate to the `frontend` directory.
2. Install dependencies:
   ```
   npm install
   ```
3. Start the application:
   ```
   npm start
   ```

## API Endpoints

- **Authors**
  - `POST /api/authors`: Create a new author
  - `GET /api/authors/:id`: Get author details

- **Books**
  - `POST /api/books`: Upload a new book
  - `GET /api/books/:id`: Get book details

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.

## License

This project is licensed under the MIT License.