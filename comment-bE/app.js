const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

const userRoutes = require('./routes/user');
const commentRoutes = require('./routes/comment'); 
const repliesRoutes = require('./routes/replies');

const { config } = require('dotenv');
config();


const MONGODB_URL = `mongodb+srv://geraldoeze:dzsqH2N578ghKxC0@cluster01.zshtev5.mongodb.net/commentData?retryWrites=true&w=majority`
// const MONGODB_URL = `mongodb+srv://${process.env.MONGODB_NAME}:${process.env.MONGODB_PASS}@cluster01.zshtev5.mongodb.net/${process.env.MONGODB_DB}?retryWrites=true&w=majority`
// const MONGODB_URL = 'mongodb://127.0.0.1:27017/commentData'

app.use(bodyParser.json());

app.use((req, res, next) => { 
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Headers', 
      'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE');  
    next();
});

app.use('/api', userRoutes);
app.use('/api/com', commentRoutes);
app.use('/api/rep', repliesRoutes);

app.get("/", (req, res, next) => {
  res.send("Server is running")
})

app.use((req, res, next) => {
  const error = new Error('Could not find this route', 404);
  throw error;
});

mongoose
    .connect(MONGODB_URL)
    .then( () => {
        app.listen(process.env.PORT || 5000);
        console.log("Connected!!")
    })
    .catch(err => {
        console.log(err)
    })
