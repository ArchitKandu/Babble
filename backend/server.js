const express=require("express");
const dotenv=require('dotenv');
const {chats}=require("./data/data");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");

const app = express();

dotenv.config();
connectDB();

app.get("/",(req,res)=>{
    res.send("API is Called!!")
}) //SIMPLE API CALLED

app.use('/api/user',userRoutes);

app.listen(5000,console.log("Server started on PORT 5000!!"));