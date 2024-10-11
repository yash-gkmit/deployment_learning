const express = require('express');
const app = express();

app.use(express.urlencoded({extended:true}));

app.get('/', (req, res)=>{
    res.json("Welcome, Home!");
});


app.get('/health', (req, res)=>{
    res.json("Feeling well!");
});

app.listen(process.env.PORT || 3000,(err)=>{
    if(err) {console.log(err)}
    console.log(`Server is listening at 3000`);
});
