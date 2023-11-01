import { Router } from "express";
import raceController from "../controller/race.controller.js";
const router = new Router();

router.get('/race', raceController.getRace);
router.get('/race/:id', raceController.getOneRace);
router.get('/subrace/:id', raceController.getSubrace);

export default router;