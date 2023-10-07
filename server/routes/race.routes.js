import { Router } from "express";
import raceController from "../controller/race.controller.js";
const router = new Router();

router.get('/race', raceController.getRace);


export default router;