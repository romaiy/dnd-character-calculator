import db from '../db.js';

class ClassesController {

  async getClasses(_req, res) {
    const classes  = await db.query(`SELECT * FROM class`);
    return res.json(classes.rows);
  }
}


export default new ClassesController();