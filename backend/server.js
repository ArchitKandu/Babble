const express=require("express");
const {chats}=require("./data/data")
const app = express();

// app.get("/",(req,res)=>{
//     res.send("API is Called!!")
// }) //SIMPLE API CALLED

// app.get("/api/chat",(req,res)=>{
//     res.send(chats); //ENTIRE DATA
// }) //"http://localhost:5000/api/chat" will become api for frontend part 
 
app.get("/api/chat/:id",(req,res)=>{
    // console.log(req.params.id) //For single ID
    const singleChat=chats.find((c)=>c._id===req.params.id);
    res.send(singleChat);
})

app.listen(5000,console.log("Server started on PORT 5000!!"));