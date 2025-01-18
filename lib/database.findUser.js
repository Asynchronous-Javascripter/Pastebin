import userModel from '../models/userModel';

const findUser = async (user_details) => {
  try {
    const foundedUser = await userModel.findOne(user_details);
    if(!foundedUser){
      return {status:404,message:'Sorry, but user is not found on database!'}
    }else{
      return {status:200,name:foundedUser.name,email:foundedUser.email,age:foundedUser.age,message:'User founded successfully!'}
    }
  } catch (error) {
    console.log(error.message);
  }
}

export default findUser;