# Koa TypeScript CRUD Server

A TypeScript-based REST API using the Koa framework, providing CRUD operations on a dataset of books.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Installation and Setup](#installation-and-setup)
3. [File Structure and Descriptions](#file-structure-and-descriptions)
4. [Running the Server](#running-the-server)
5. [Endpoints](#endpoints)

## Project Overview

This project demonstrates the creation of a simple Koa server using TypeScript. The primary feature is to perform CRUD operations on a collection of books.

## Installation and Setup

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/dattgoswami/book-api-koa-ts
   ```

2. **Navigate to the Directory**:

   ```bash
   cd book-api-koa-ts
   ```

3. **Install Dependencies**:

   ```bash
   npm install
   ```

## File Structure and Descriptions

- **src/models/book.ts**: Contains the `Book` data model and an initial array of book objects.
- **src/routes/bookRoutes.ts**: This file defines routes and handlers for CRUD operations on the book dataset.
- **src/server.ts**: This file has the main server configuration, middlewares, and initializes the Koa server.

## Running the Server

To start the server, execute:

```bash
npm start
```

The server should now be live at `http://localhost:3000`.

## Endpoints

1. **Get All Books**:

   - Method: `GET`
   - Endpoint: `/books`

2. **Retrieve a Specific Book by ID**:

   - Method: `GET`
   - Endpoint: `/books/:id`

3. **Insert a New Book**:

   - Method: `POST`
   - Endpoint: `/books`
   - Body:
     ```json
     {
       "id": <number>,
       "title": "<title>",
       "author": "<author_name>",
       "genre": "<genre>",
       "publishedYear": <year>
     }
     ```

4. **Update a Book by ID**:

   - Method: `PUT`
   - Endpoint: `/books/:id`
   - Body:
     ```json
     {
       "id": <number>,
       "title": "<updated_title>",
       "author": "<updated_author_name>",
       "genre": "<updated_genre>",
       "publishedYear": <updated_year>
     }
     ```

5. **Remove a Book by ID**:

   - Method: `DELETE`
   - Endpoint: `/books/:id`
