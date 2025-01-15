import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import userModel from '../../../../models/userModel';
import {cookies} from 'next/headers';
const POST = async (req) => {
  const login_data = await req.json();
  const cookieStore = await cookies();

  const salt_round = Number(process.env.BCRYPT_SALT_ROUND);
 
  const email = String(login_data.email);
  const password = String(login_data.password);

 const foundedUser = await userModel.findOne({email});
  
  if(!foundedUser){
    console.log('Error, occured; User not founded on Database! better go for register!');
    return Response.json({status:500, message:'Error, occured; User not founded on Database! better go for register!'});
  }else {
    const {name,age} = foundedUser;
    const valide_password = await bcrypt.compare(password, foundedUser.password);
   
    if(!valide_password){
     return Response.json({status:500, message:'Sorry, but email or password is wrong!'});
   } 
    const auth_token = jwt.sign({name,email,age}, process.env.JWT_REGISTRATION_AUTH_TOKEN_SECRET);
    cookieStore.set('auth_token',auth_token,{priority:process.env.COOKIE_PRIORITY,maxAge:Number(process.env.COOKIE_AGE), httpOnly:true});
    return Response.json({status:200, message:'Login Successfull!'});
  }
}

export {
  POST
}