# Library Website Backend

## Overview
This backend is built using Node.js and Express, providing a RESTful API for authors to upload their novels and short stories. It includes routes for managing authors and books, as well as middleware for authentication and file uploads.

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd library-website/backend
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Environment Variables**
   Create a `.env` file in the `backend` directory and add the following variables:
   ```
   PORT=5000
   MONGODB_URI=<your-mongodb-uri>
   JWT_SECRET=<your-jwt-secret>
   ```

4. **Run the Server**
   ```bash
   npm start
   ```

## API Endpoints

### Authors
- **POST /api/authors**: Create a new author
- **GET /api/authors/:id**: Retrieve author details

### Books
- **POST /api/books**: Upload a new book
- **GET /api/books/:id**: Retrieve book details

## File Structure
- `src/app.js`: Main entry point for the application.
- `src/controllers/`: Contains controller files for handling requests.
- `src/models/`: Contains model files for database schemas.
- `src/routes/`: Contains route files for API endpoints.
- `src/middleware/`: Contains middleware for authentication.
- `src/utils/`: Contains utility functions for file uploads.

## Technologies Used
- Node.js
- Express
- MongoDB
- Multer (for file uploads)
- JWT (for authentication)

## License
This project is licensed under the MIT License.