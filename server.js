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
app.use(bodyParser.urlencoded({limit: '10mb', extended: false}))

//set up public as static 
app.use(express.static('public'))

// --- Mongo & startup ---
const mongoose = require('mongoose');
process.on('unhandledRejection', (r) => console.error('Unhandled Rejection:', r));
process.on('uncaughtException', (e) => console.error('Uncaught Exception:', e));
async function start() {
  const uri = (process.env.DATABASE_URL || '').trim();
  if (!uri) {
    console.warn('⚠️  No DATABASE_URL set. The server will start without a DB connection.');
  }
  try {
    if (uri) {
      // No deprecated options needed on driver v4+
      await mongoose.connect(uri);
      console.log('✅ Connected to MongoDB');
    }
  } catch (err) {
    // Log but keep the web server running so you can still see pages/logs
    console.error('❌ Mongo connect error:', err.message);
  }
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`🚀 http://localhost:${port}`));
}
start();












//paths 
app.use('/' , indexRouter)
app.use('/authors' , authorsRouter)
<<<<<<< HEAD
=======

>>>>>>> d469be1 (Initial Author Routes)



//port
app.listen(process.env.PORT || 3000)