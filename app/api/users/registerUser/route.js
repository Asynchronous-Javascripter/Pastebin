import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import userModel from '../../../../models/userModel';
import {cookies} from 'next/headers';
const POST = async (req) => {
  const cookieStore = await cookies();

  const salt_round = Number(process.env.BCRYPT_SALT_ROUND);
  const registered_data = await req.json();
  const name =  String(registered_data.name);
  const email = String(registered_data.email);
  const password = String(registered_data.password);
  let age = Number(registered_data.age);
  if(age > 100) age = 100;
  
  /* bcrypt hashing function */ 
  const hashed_password = await bcrypt.hash(password, salt_round);

  
  const createdUser = await userModel.create({name,email,password:hashed_password,age});
  
  if(!createdUser){
    console.log('Error, occured; User not created!');
    return Response.json({status:500, message:'Error, occured; User not created on the database!'});
  }else {
    const auth_token = jwt.sign({name,email,age}, process.env.JWT_REGISTRATION_AUTH_TOKEN_SECRET);
    cookieStore.set('auth_token',auth_token,{priority:process.env.COOKIE_PRIORITY,maxAge:Number(process.env.COOKIE_AGE), httpOnly:true});

    return Response.json({status:200, message:'Registration successfull!'});
  }
}

export {
  POST
}