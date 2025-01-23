// for create Data .
import {cookies} from 'next/headers';
import {redirect} from 'next/navigation';
import jwt_verification from "../lib/jwt.verification";
const checkAuth_giveCookie = async () => {
  const cookieStore = await cookies();
  const isCookiePresent = cookieStore.has('auth_token');

  if(!isCookiePresent){
    return null;
    redirect('/login');
  }else{
    const {cookie_user_name, cookie_user_email, cookie_user_age} = await jwt_verification(auth_token.value,process.env.JWT_SECRET);
    
    return {name:cookie_user_name, email:cookie_user_email,age:cookie_user_age};
  }
}
export default checkAuth_giveCookie;