import ClientError from "../exceptions/clientError";
import CustomError from "../exceptions/customError";
import Result from "../interfaces/result";
import IUser from "../interfaces/user";
import User from "../models/user";
import bcrypt from "bcrypt";

export default class UserService {

    static async newUser(value: IUser, role: string): Promise<Result> {
     let result;

    try{
      const user = await User.findOne({email: value.email})
      if(user){
        throw new ClientError("Email already exists");
      }
     
      const hashPassword = await bcrypt.hash(`${value.password}`, 10)
      
      const newUser = new User({
        username : value.username,
        email : value.email,
        password : hashPassword,
        role : role
      });

      await newUser.save();

      result = {message: "Enregistrement réussi", status: 200} ; 

    }catch(err){
     if(err instanceof ClientError){
      result = {message: `${err}`, status: 400};
     } else{
      result = {message: `${err}`, status: 500};
     }
    }

     return result;
    }

    static async getAllUser(): Promise<string | IUser[]> {
      
      try{
       return await User.find({},{"password" : 0, "__v": 0});

      }catch(err){
        console.error(err);
        return "Error: " + err;
      }
    }
}