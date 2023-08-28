# Koa TS CRUD Server

A simple RESTful API built using Koa and TypeScript for managing books.

## Features

- Basic CRUD operations on books.
- TypeScript interfaces for type safety.
- Middleware support using Koa.

## Project Structure

```
src/
│
├── models/
│ └── book.ts # Contains the Book interface and sample books data.
│
├── routes/
│ └── bookRoutes.ts # Contains the routes for CRUD operations on books.
│
└── server.ts # The main server file to start the Koa application.
```

## Setup

1. **Install Dependencies**

```
npm install

```

2. **Run the server**

```
npm start
```

This will start the server on `http://localhost:3000`.

## API Endpoints

- **Get all books**

```
GET /books
```

- **Get a specific book by ID**

```
GET /books/:id
```

- **Add a new book**

```
POST /books
```

Body example:

```json
{
  "id": 6,
  "title": "New Book",
  "author": "Author Name",
  "genre": "Genre",
  "publishedYear": 2023
}
```

- **Update a book by ID**

  ```
  PUT /books/:id
  ```

  Body example:

  ```json
  {
    "id": 6,
    "title": "Updated Book",
    "author": "Updated Author",
    "genre": "Updated Genre",
    "publishedYear": 2024
  }
  ```

- **Delete a book by ID**
  ```
  DELETE /books/:id
  ```

## Technologies Used

- [Koa](https://koajs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [koa-bodyparser](https://www.npmjs.com/package/koa-bodyparser)

## Contributing

Feel free to fork this repository, make changes, and submit pull requests. If you have any questions, open an issue or reach out directly.
