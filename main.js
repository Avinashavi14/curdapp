const express = require('express');
const app = express();
const port = 3030;

app.get('./',(req,res)=>{
    app.send('welcome');
});

app.listen(port,()=>{
    console.log(`This server is running on port ${port}`);
})