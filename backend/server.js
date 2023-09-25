const express=require("express");
const dotenv=require('dotenv');
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

const app = express();
app.use(express.json());

dotenv.config();
connectDB();

app.get("/",(req,res)=>{
    res.send("API is Called!!")
}); //SIMPLE API CALLED

app.use('/api/user', userRoutes);
app.use('/api/chat', chatRoutes);
app.use(notFound);
app.use(errorHandler);

app.listen(5000,console.log("Server started on PORT 5000!!"));