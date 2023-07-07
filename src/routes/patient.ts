import {Router} from "express";
import patientController from "../controllers/patient";
const router = Router();

//patient
router.post("/", patientController.savePatient);

router.get("/:id([0-9a-z]{24})", patientController.getOnePatient);

router.get("/", patientController.getAllPatients);

router.put("/:id", patientController.updatePatient);

router.delete("/:id", patientController.deletePatient);

router.get("/paginate/", patientController.getPaginatePatients);

router.get("/search/", patientController.searchPatients);

export default router;