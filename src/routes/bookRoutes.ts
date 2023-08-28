import Router from "koa-router";
import { books, Book } from "../models/book";

const router = new Router();

router.get("/books", (ctx) => {
  ctx.body = books;
});

router.get("/books/:id", (ctx) => {
  const book = books.find((b) => b.id === +ctx.params.id);
  if (!book) {
    ctx.status = 404;
    ctx.body = { message: "Book not found" };
    return;
  }
  ctx.body = book;
});

router.post("/books", (ctx) => {
  const book: Book = ctx.request.body as Book;
  books.push(book);
  ctx.status = 201;
  ctx.body = book;
});

router.put("/books/:id", (ctx) => {
  const index = books.findIndex((b) => b.id === +ctx.params.id);
  if (index === -1) {
    ctx.status = 404;
    ctx.body = { message: "Book not found" };
    return;
  }
  const updatedBook = ctx.request.body as Book;
  books[index] = updatedBook;
  ctx.body = updatedBook;
});

router.del("/books/:id", (ctx) => {
  const index = books.findIndex((b) => b.id === +ctx.params.id);
  if (index === -1) {
    ctx.status = 404;
    ctx.body = { message: "Book not found" };
    return;
  }
  books.splice(index, 1);
  ctx.body = { message: "Book deleted" };
});

export default router;
