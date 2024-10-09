const express = require('express');
const app = express();
const port = 80;

app.use(express.urlencoded({extended:true}));

app.get('/', (req, res)=>{
    res.json("Welcome, Home!");
});


app.get('/health', (req, res)=>{
    res.json("Feeling well!");
});

app.listen(port,(err)=>{
    if(err) {console.log(err)}
    console.log(`Server is listening at ${port}`);
});