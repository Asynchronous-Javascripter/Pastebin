import mongoose from '../lib/database.js';
const dataSchema = new mongoose.Schema({
  title: String,
  description:String,
  author : {
    type: mongoose.Schema.Types.ObjectId,
    ref : 'User'
  }
});
const dataModel = mongoose.models.User_Data || mongoose.model('User_Data',userSchema);
export default dataModel;