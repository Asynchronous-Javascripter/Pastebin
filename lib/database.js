import mongoose from 'mongoose';
const database_connection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Successfully connected to mongodb!');
  } catch (error) {
    console.log('Failed to connect to database.',error.message);
  }
}
database_connection();
const db_connection_ = mongoose.connection;

db_connection_.on('error',(error)=>{
  console.log('There is an error.',error.message);
});

export default mongoose;