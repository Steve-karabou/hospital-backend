
import { Request, Response} from "express"
import Joi from "joi";
import ClientError from "../exceptions/clientError";
import UserService from "../services/userService";
import { Roles } from "../role";


export default class UserController {

      
    static async createUser(req: Request, res: Response) {
                
        const schema = Joi.object({
            username: Joi.string().required().label("Username"),
            email: Joi.string().pattern(new RegExp('^[A-Za-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$')).required().label("Email"),
            password:Joi.string().required().label("Password")
         });

         const {value, error} = schema.validate(req.body);
         
        try{

          if(error) {
            throw new ClientError(`${error?.details[0].message}`);
          }

          const result = await UserService.newUser(value, Roles.USER);
          res.status(result.status).json({message: result.message});

        }catch(err){
           console.error("err: ", err); 
           const  result = {message: `${err}`, status: 400};
           res.status(result.status).json({message: result.message});
                 
        }
        
    }
    
    static async allUser(req: Request, res: Response) {
      
        try {
             const users = await UserService.getAllUser();
             res.status(200).json(users);
        } catch(err) {
             res.status(500).json(err);
        }
    }  
}






