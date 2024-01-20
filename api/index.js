import express from "express";
import UserRoutes from "./routes/users.js"
import ProductRoutes from "./routes/Product.js"
import ProductsRoutes from "./routes/Products.js"
import WishRoutes from "./routes/Wish.js"
import HistoryRoutes from "./routes/History.js"

const app = express();
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Credentials", true);
    next();
})