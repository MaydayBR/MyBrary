const express = require('express')
const router = express.Router()

//all authors route
router.get('/', (req,res) => {
    res.render("authors/index")
})

//New author route (get -> displaying the form)
router.get('/new', (req,res)=>{
    res.render('authors/new')
})

//New author route ()
router.post('/new', (req,res)=>{
    res.render('authors/')
})

module.exports = router