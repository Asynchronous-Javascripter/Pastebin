import {cookies} from 'next/headers';
import {redirect} from 'next/navigation';
const checkAuth = async () => {
  const cookieStore = await cookies();
  const auth_cookie = cookieStore.get('auth_token');
  if(!auth_cookie){
    redirect('/login');
  }
}
export default checkAuth;