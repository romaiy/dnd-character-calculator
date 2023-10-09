import db from '../db.js';

class RaceController {

  async getRace(_req, res) {
    const race  = await db.query(`SELECT * FROM race`);
    return res.json(race.rows);
  }

  async getOneRace(req, res) {
    const id = req.params.id;
    const race = await db.query(
      `
        SELECT * FROM race
        WHERE race_id = $1
      `, [id]
    )
    return res.json(race.rows);
  }
}

export default new RaceController();