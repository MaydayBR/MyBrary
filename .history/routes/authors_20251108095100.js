const express = require('express')
const router = express.Router()

//all authors route
router.get('/', (req,res) => {
    res.render("index")
})

//New author route 
router.get('/new', (req,res)=>{});

//


module.exports = router