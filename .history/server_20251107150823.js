if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
} 

const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

const indexRouter = require('./routes/index.js')

app.set('view engine' , 'ejs')
app.set('views', __dirname + '/views')
app.set('layout' , 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

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


app.use('/' , indexRouter)





app.listen(process.env.PORT || 3000)