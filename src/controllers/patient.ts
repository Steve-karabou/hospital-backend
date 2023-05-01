
import { Request, Response } from "express";
import Patient from "../models/patient";
import Joi from "joi";


export default class PatientController{

    static savePatient(req:Request, resp: Response): void{
        const schema = Joi.object({
            lastName: Joi.string().required().label("Nom de famille"),
            firstName: Joi.string().required().label("Prénom"),
            age: Joi.number().integer().required().label("Ton age"),
            sex: Joi.string().required().label("votre sexe"),
            mobile: Joi.number().integer().required().label("Votre numero de Téléphone"),
            email: Joi.number().integer().required().label("Votre numero de Téléphone"),
         });
         const resultat = schema.validate(req.body);
         console.log(resultat)

        // let patient = new Patient(req.body);
        // patient.save().then(()=> resp.status(200).json({message: "Enregistrement réussi"}))
        // .catch((err) => resp.status(400).json({err: ""+err}))

    }

    
}