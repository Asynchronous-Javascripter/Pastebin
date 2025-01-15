import Cards from '../components/Cards.jsx';
import checkAuth from '../lib/authentication';
export const generateMetadata = () => {
  return {
    title:'Pastebin - Home',
    description:'This application is the modern version of pastebin platform.'
  }
}

const page = async () => {
  const arr = [];
  for(let i = 0; i<3; i++){arr.push(
     <div className="Card w-[320px] ml-[6px] mt-3 mb-3">
       <Cards title="Hello World" description="I am robo! Lorem ipsum non numquam, ea, rem nobis in facilis quae."/>
     </div>
    )};
  await checkAuth();
  return  arr;
}

export default page;