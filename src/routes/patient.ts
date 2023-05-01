import {Router} from "express";
import patientController from "../controllers/patient";
const router = Router();

//patient
router.post("/", patientController.savePatient);

export default router;