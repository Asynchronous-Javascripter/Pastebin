import mongoose from '../lib/database.js';
const userSchema = new mongoose.Schema({
  name:String,
  email:String,
  password:String,
  age:Number,
  datas : [{
    type: mongoose.Schema.Types.ObjectId, 
    ref:'User_Data'
  }]
});
const userModel = mongoose.models.User || mongoose.model('User',userSchema);
export default userModel; 