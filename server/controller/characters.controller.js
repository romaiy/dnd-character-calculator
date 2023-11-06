import db from '../db.js';
import utilsController from './utils.controller.js';

class CharactersController {

  async getCharacters(_req, res) {
    const characters  = await db.query(
      `
        SELECT 
          C. "name", CL. "class_name", R. "race_name", S. "subrace_name", C. "id"
        FROM 
          "characters" C
        LEFT JOIN
          "race" R ON
              (R."race_id" = C."race_id")
        LEFT JOIN
          "class" CL ON
            (CL."class_id" = C."class_id")
        LEFT JOIN
          "subrace" S ON
            (S."subrace_name" = C."subrace_name")
      `
    );
    return res.json(characters.rows);
  }

  async createCharacter(req, res) {
    const {name, class_id, race, subrace} = req.body;
    const id  = utilsController.generateId();
    const character = await db.query(
      `INSERT INTO characters (id, name, class_id, race_id, subrace_name) values ($1, $2, $3, $4, $5) RETURNING *`
    , [id, name, class_id, race, subrace]);
    return res.json(character.rows[0]);
  }

  async deleteCharacter(req, res) {
    const id = req.params.id;
    const character = await db.query('DELETE FROM characters WHERE id = $1', [id]);
    return res.json(character.rows);
  }

  async updateCharacter(req, res) {
    const {id, name, class_id, race, subrace} = req.body;
    const character = await db.query(
      `UPDATE characters set name = $2, class_id = $3, race_id = $4, subrace_name = $5 WHERE id = $1 RETURNING *`
    , [id, name, class_id, race, subrace]);
    return res.json(character.rows[0]);
  }
}


export default new CharactersController();