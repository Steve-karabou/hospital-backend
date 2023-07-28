
import { Request, Response} from "express"

export default class UserController {
  
    static createUser(req: Request, resp: Response){
        
        let {username, email, password } = req.body;


    } 
}