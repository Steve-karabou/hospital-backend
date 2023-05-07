
import { Request, Response } from "express";
import Patient from "../models/patient";
import Joi, { string } from "joi";


export default class PatientController{

    static savePatient(req:Request, resp: Response){
        const schema = Joi.object({
            lastName: Joi.string().required().label("Nom de famille"),
            firstName: Joi.string().required().label("Prénom"),
            age: Joi.number().integer().required().label("Age"),
            sex: Joi.string().required().label("Sexe"),
            mobile: Joi.number().integer().required().label("Numero de Téléphone"),
            email: Joi.string().required().label("Email"),
         });

          const {value, error} = schema.validate(req.body);
          if(error){
             return resp.status(400).json({error: true, message: error?.details[0].message})
           }

        let patient = new Patient(value);
        patient.save().then(()=> resp.status(200).json({message: "Enregistrement réussi"}))
        .catch((err) => resp.status(500).json({err: ""+err}))

    }

    static getOnePatient(req: Request, resp: Response): void{

        Patient.findById(req.params.id).then((data) => resp.status(200).json(data))
        .catch((err) => resp.status(500).json({err: ""+err}))

    }

    static getAllPatients(req: Request, resp: Response){
      Patient.find().then((data) => resp.status(200).json(data))
      .catch((err) => resp.status(500).json({err: ""+err}))
        }

    static getPaginatePatients(req: Request, resp: Response){
      
     let p:number = parseInt(req.query.page?''+req.query.page: '1');
     let size:number = parseInt(req.query.size?''+req.query.size: '5');
      Patient.paginate({}, {page:p, limit: size}).then((data)=> resp.status(200).json(data))
     .catch((err)=>resp.status(500).json({err: ""+err}));

    }

    static searchPatients(req: Request, resp: Response){
        let p:number = parseInt(req.query.page?''+req.query.page: '1');
        let size:number = parseInt(req.query.size?''+req.query.size: '5');
        let kw:string = req.query.kw? ""+req.query.kw: "";
         Patient.paginate({title: {$regex:".*(?i)"+kw+".*"}}, {page:p, limit: size}).then((data)=> resp.status(200).json(data))
         .catch((err)=>resp.status(500).json({err: ""+err}));  
    }

    
}