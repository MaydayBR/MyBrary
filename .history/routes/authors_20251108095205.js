const express = require('express')
const router = express.Router()

//all authors route
router.get('/', (req,res) => {
    res.render("authors/index")
})

//New author route 
router.get('/new', (req,res)=>{
    res.render('authors/new')
})

//
router.set

module.exports = router