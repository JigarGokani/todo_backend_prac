const express = require("express")
const app = express()
require("dotenv").config()

const PORT = process.env.PORT || 4000;

app.use(express.json());

const todoroutes = require("./routes/todos")
// mount the routes 
app.use("/api/v1",todoroutes);


app.listen(PORT,()=>{
    console.log(`App is listening at port ${PORT}`)
})

const dbConnect = require("./config/database");
dbConnect();


// default route
app.get("/",(req,res) =>{
    res.send(`<h1>This is HOMEPAGE BABY</h1>`)
})