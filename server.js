import Koa from "koa";
import router from "./routes/index.js";
import koaBody from "koa-body";
import mongoose from "mongoose";

//config mongo
mongoose.connect(
  "mongodb+srv://santi:santi123@cluster0.judbcat.mongodb.net/?retryWrites=true&w=majority"
);


//config app
const app = new Koa();

app.use(koaBody());

app.use(router.routes());

app.use((ctx) => {
  ctx.response.status = 404;
  ctx.body = {
    status: "Not found",
    message: "Route not found",
  };
});

app.listen(3000);
console.log("Servidor escuchando puerto 3000");