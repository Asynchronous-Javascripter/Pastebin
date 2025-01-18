import jwt from 'jsonwebtoken';
const jwt_verification = async (token,secret) => {
  try {
    const verified_obj = await jwt.verify(token,secret);
    return verified_obj;
  } catch (error) {
    console.log(error);
   // return error.message;
  }
}
export default jwt_verification;