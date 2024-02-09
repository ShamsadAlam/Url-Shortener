# URL Shortener

A simple URL shortener application developed using the MERN (MongoDB, Express.js, React.js, Node.js) stack with MVC architecture.

## Features

- **URL Shortening:** Shorten long URLs into more manageable links.
- **Redirecting:** Redirect users to the original long URL when they visit the shortened URL.
- **User Authentication:** Securely manage shortened URLs with user authentication.
- **User Dashboard:** View and manage shortened URLs (edit, delete, view analytics) in a user dashboard.
- **Error Handling:** Implement proper error handling for invalid URLs, server errors, etc.
- **Security Considerations:** Ensure secure user authentication and handle sensitive information appropriately.
- **Analytics (Optional):** Track and display basic analytics, such as the number of clicks for each shortened URL.

## Project Structure

### Server Side

- **`server.js`:** Entry point for the Node.js server.
- **`routes/`:** Contains route handling for authentication and URLs.
- **`controllers/`:** Implements business logic for authentication and URLs.
- **`models/`:** Defines Mongoose schemas for User and ShortUrl.
- **`middlewares/`:** Contains middleware functions, e.g., authentication middleware.

### Client Side

- **`client/`:** React application folder.
  - **`src/`:** React components and application logic.
  - **`components/`:** Contains React components (Home, Dashboard, etc.).
  - **`services/`:** API services using Axios for server communication.
  - **`App.js`:** Main component managing routes.
  - **`config.js`:** Configuration file for client-side settings.

## Getting Started

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/ShamsadAlam/Url-Shortener.git
   cd Url-Shortener
