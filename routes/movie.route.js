import express from 'express';
const router = express.Router();

//crud for movies

router.get('/movies',(req,res)=>{
    res.send('get all the movies');
})

router.post('/movies',(req,res)=>{
    res.send('create a new movie')
})


router.put('/movies',(req,res)=>{
    res.send('update a movies')
})


router.delete('/movies',(req,res)=>{
    res.send('delete a movie')
})




export default router;