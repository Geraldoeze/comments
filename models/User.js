import {model, models, Schema} from 'mongoose';


const userSchema = new Schema({
    image: {type: Object},
    username: {type: String}
})

const User = models?.User || model('User', userSchema)

export default User;
  

