import {cookies} from 'next/headers';
import {redirect} from 'next/navigation';

const GET = async () => {
  const cookieStore = await cookies();
  if(cookieStore.has('auth_token')){
    cookieStore.delete('auth_token');
    redirect('/login');
    // return Response.json({status:200,msg:'logouted!'});
  }
}

export {
  GET
}