import { Router } from "express";
import classesController from "../controller/classes.controller.js";
const router = new Router();

router.get('/classes', classesController.getClasses);

export default router;