# Library Website Frontend

This is the frontend part of the Library Website project, built using React and Vite. The application allows authors to upload their novels and short stories, manage their profiles, and interact with readers.

## Project Structure

The frontend project is organized as follows:

- **public/**: Contains static files, including the main HTML file.
- **src/**: Contains the source code for the React application.
  - **assets/**: Static assets such as images and icons.
  - **components/**: Reusable components for the application.
    - **Navbar.jsx**: Navigation bar component.
    - **BookCard.jsx**: Component to display book information.
    - **UploadForm.jsx**: Form for authors to upload their books.
    - **AuthorProfile.jsx**: Component to display author profile information.
  - **pages/**: Contains the main pages of the application.
    - **Home.jsx**: Landing page component.
    - **Login.jsx**: Login page component.
    - **Register.jsx**: Registration page component.
    - **AuthorDashboard.jsx**: Dashboard for authors to manage their books.
    - **BookDetails.jsx**: Component to display detailed information about a book.
  - **styles/**: Contains CSS styles for the application.
  - **App.jsx**: Main component that sets up routing for the application.
  - **main.jsx**: Entry point for the React application.

## Setup Instructions

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd library-website/frontend
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Run the application**:
   ```
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:3000` to view the application.

## Usage

- Authors can register and log in to upload their books.
- Users can browse books and view details about each book.
- The application is designed to be user-friendly and responsive.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.