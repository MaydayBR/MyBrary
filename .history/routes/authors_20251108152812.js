const express = require('express')
const router = express.Router()
const Author = require('../models/author')

//all authors route
router.get('/', async (req,res) => {
    try{
        //res.render("authors/index"
    }catch{
        //pass
    }
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
        const newAuthor =  await author.save()
        res.redirect('authors')
        //res.redirect(`authors/${newAuthor.id}`)
    }catch{
        res.render('authors/new',{
            author:author,
            errorMessage: 'Error creating author'
        })
    }
})

module.exports = router