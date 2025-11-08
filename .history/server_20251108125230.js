if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
} 

const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const bodyParser = require('body-parser')

//routes
const indexRouter = require('./routes/index')
const authorsRouter = require('./routes/authors')

//setting up views and layouts 
app.set('view engine' , 'ejs')
app.set('views', __dirname + '/views')
app.set('layout' , 'layouts/layout')
app.use(expressLayouts)

//set up public as static 
app.use(express.static('public'))

//mongoDB setup
const mongoose = require('mongoose')
const uri = (process.env.DATABASE_URL || '').trim();
if (!/^mongodb(\+srv)?:\/\//.test(uri)) {
  throw new Error(`Bad DATABASE_URL. Got: "${uri}"`);
}
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', (err) => console.error('Mongo error:', err));
db.once('open', () => console.log('Connected to Mongoose'));











//paths 
app.use('/' , indexRouter)
app.use('/authors' , authorsRouter)




//port
app.listen(process.env.PORT || 3000)