import db from '../db.js';

class RaceController {

  async getRace(_req, res) {
    const race  = await db.query(`SELECT "race_id", "race_name", "description" FROM race`);
    return res.json(race.rows);
  }

  async getOneRace(req, res) {
    const id = req.params.id;
    const race = await db.query(
      `
        SELECT 
          R.*, RM.*, RH.*, RC. "modifier", C. "characteristicName"
        FROM 
          "race" R
        INNER JOIN
          "race_mechanic" RM ON
              (RM."race_id" = R."race_id")
        INNER JOIN
          "race_history" RH ON
            (RH."race_id" = R."race_id")
        INNER JOIN
          "race_characteristic" RC ON
            (RC."race_id" = R."race_id")
        INNER JOIN
          "characteristic" C ON
            (C."characteristic_id" = RC."characteristic_id")
        WHERE 
          R. race_id = $1
      `, [id]
    );
    const {race_id, race_name, description, ...details} = race.rows[0];
    return res.json({id: race_id, race_name: race_name, description: description, details: details});
  }

  async getSubrace(req, res) {
    const id  = req.params.id;
    const subrace = await db.query(
      `
        SELECT
          SR. *
        FROM
          "subrace" SR
        WHERE
          SR. race_id = $1
      `, [id]
    );
    return res.json(subrace.rows);
  }
}

export default new RaceController();