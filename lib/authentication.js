import {cookies} from 'next/headers';
import {redirect} from 'next/navigation';
const checkAuth = async () => {
  const cookieStore = await cookies();
  const isCookiePresent = cookieStore.has('auth_token');
 // const auth_cookie = cookieStore.get('auth_token');
  if(!isCookiePresent){
    redirect('/login');
  }
}
export default checkAuth;