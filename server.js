const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const port = 3111

const app = express();
app.use(express.static(__dirname))

mongoose.Connect('mongodb://localhost:27017',{
    useNewUrlParser: true,
    setUnifiedTopology: true,
}

).ten(()=>{
    console.log('mongo is connected');
}).

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'from.html'))
})

app.listen(port,()=>{
    console.log("server starter")
})