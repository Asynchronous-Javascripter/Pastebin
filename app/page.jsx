import Cards from '../components/Cards.jsx';
import checkAuth from '../lib/authentication';
import {cookies} from 'next/headers';
import jwt_verification from "../lib/jwt.verification";
import findUser from '../lib/database.findUser.js';

export const generateMetadata = () => {
  return {
    title:'Pastebin - Home',
    description:'This application is the modern version of pastebin platform.'
  }
}

const page = async () => {
  await checkAuth(); // auth check 
  
  // cookie management to find user!
  const cookieStore = await cookies();
  const auth_token = cookieStore.get('auth_token');
  
  const {cookie_user_name, cookie_user_email, cookie_user_age} = await jwt_verification(auth_token.value,process.env.JWT_SECRET);

  const user_finding_result = await findUser({cookie_user_name,cookie_user_email,cookie_user_age});
  
  if(user_finding_result.status == 200){
//    console.log(user_finding_result);
    return <div className="font-black font-serif relative top-1 left-1">Hello, {user_finding_result.name}, your email is {user_finding_result.email} and your age is {user_finding_result.age}</div>;
  }
  
}

export default page;