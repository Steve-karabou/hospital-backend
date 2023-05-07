import {Router} from "express";
import patientController from "../controllers/patient";
const router = Router();

//patient
router.post("/", patientController.savePatient);

router.get("/:id([0-9a-z]{24})", patientController.getOnePatient);

router.get("/", patientController.getAllPatients);

router.get("/paginate/", patientController.getPaginatePatients);

export default router;