import { Router } from "express";
import charactersController from "../controller/characters.controller.js";
const router = new Router();

router.get('/characters', charactersController.getCharacters);
router.post('/character', charactersController.createCharacter);
router.put('/character/:id', charactersController.updateCharacter);
router.delete('/character/:id', charactersController.deleteCharacter);

export default router;