import { Router, query } from "express";
import raceController from "../controller/race.controller.js";
const router = new Router();

router.get('/race', raceController.getRace);
router.get('/race/:id', raceController.getOneRace);

export default router;