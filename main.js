import express from 'express';
import movieRouter from './routes/movie.route.js'
const app = express();
const port = 3000;

//routes

app.get('/',(req,res)=>{
    res.send('welcome');
});


//crud functionality for movies

app.use('/movies',movieRouter)

app.listen(port,()=>{
    console.log(`This server is running on port ${port}`);
    

})