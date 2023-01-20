import mongoose from 'mongoose';

export async function initMongoose() {
    if(mongoose.connection.readyState === 1) {
        return mongoose.connection.asPromise();
    }
    // mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true })
    mongoose.connect('mongodb://127.0.0.1:27017/commentData')
    .then(() => {
        console.log("Connected to Mongoose")
    }) 
    .catch((err) => {
        console.log(err);
      });
}