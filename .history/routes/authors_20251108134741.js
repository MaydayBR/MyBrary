const express = require('express')
const router = express.Router()
const Author = require('../models/author')

//all authors route
router.get('/', (req,res) => {
    res.render("authors/index")
})

//New author route 
router.get('/new', (req,res)=>{
    res.render('authors/new', {author: new Author() })
})

//Create author route 
router.post('/', async (req,res)=>{
    const author = new Author({
        name: req.body.name
    })
    try{
        //
    }catch
    author.save((err,newAuthor)=>{
        if (err){
            res.render('authors/new',{
                author:author,
                errMessage: 'Error creating author'
            })
        }else{
            res.redirect('authors')
            //res.redirect(`authors/${newAuthor.id}`)
        }
    })
})

module.exports = router