import mongoose from 'mongoose';
// import * as dotenv from 'dotenv'
// dotenv.config()

export async function initMongoose() {
    if(mongoose.connection.readyState === 1) {
        return mongoose.connection.asPromise();
    } 

    const MONGODB_URL = "mongodb+srv://geraldoeze:dzsqH2N578ghKxC0@cluster01.zshtev5.mongodb.net/commentData?retryWrites=true&w=majority"
    
    mongoose.connect(MONGODB_URL)
    // mongoose.connect('mongodb://127.0.0.1:27017/commentData')
    .then(() => {
        console.log("Connected to Mongoose")
    }) 
    .catch((err) => {
        console.log(err);
      });
}