import db from '../db.js';

class RaceController {

  async getRace(_req, res) {
    const race  = await db.query(`SELECT * FROM race`);
    return res.json(race.rows);
  }
}

export default new RaceController();