import express from "express";
import UserRoutes from "./routes/users.js"
import ProductRoutes from "./routes/product.js"
import ProductsRoutes from "./routes/products.js"
import WishRoutes from "./routes/wish.js"
import HistoryRoutes from "./routes/history.js"
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Credentials", true);
    next();
})

app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000"
}));

app.use(cookieParser());

app.use("/api/users", UserRoutes)
app.use("/api/product", ProductRoutes)
app.use("/api/products", ProductsRoutes)
app.use("/api/wish", WishRoutes)
app.use("/api/history", HistoryRoutes)

app.listen(8800, () => {
    console.log(" I am listening port 8800!")
})