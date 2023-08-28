import Koa from "koa";
import bodyParser from "koa-bodyparser";
import bookRoutes from "./routes/bookRoutes";

const app = new Koa();

// Middlewares
app.use(bodyParser());
app.use(bookRoutes.routes()).use(bookRoutes.allowedMethods());

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
