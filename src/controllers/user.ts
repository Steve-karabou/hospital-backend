
import { Request, Response} from "express"
import Joi from "joi";
import User from "../models/user";
import ClientError from "../exceptions/clientError";
import UserService from "../services/userService";
import { Roles } from "../role";

export default class UserController {

      
    static async createUser(req: Request, res: Response){

        let result;
                
        const schema = Joi.object({
            username: Joi.string().required().label("Username"),
            email: Joi.string().pattern(new RegExp('^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$')).required().label("Email"),
            password:Joi.string().required().label("Password")
         });

         const {value, error} = schema.validate(req.body);
         
        try{

          if(error) {
            throw new ClientError(`${error?.details[0].message}`);
          }

          result = await UserService.newUser(value, Roles.USER);

        }catch(err){
            result = {message: `${err}`, status: 400};
            console.error("err: ", err);          
        }
        
          
        res.status(result.status).json({message: result.message});
        
    }         
   
}






