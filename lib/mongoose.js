import mongoose from 'mongoose';
import * as dotenv from 'dotenv'
dotenv.config()

export async function initMongoose() {
    if(mongoose.connection.readyState === 1) {
        return mongoose.connection.asPromise();
    }
    
    mongoose.connect(process.env.MONGODB_URLINK)
    // mongoose.connect('mongodb://127.0.0.1:27017/commentData')
    .then(() => {
        console.log("Connected to Mongoose")
    }) 
    .catch((err) => {
        console.log(err);
      });
}