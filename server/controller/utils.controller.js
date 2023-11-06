class UtilsController {

  generateId() {
    const min = Math.ceil(3000);
    const max = Math.floor(5000);
    return Math.floor(Math.random() * (max - min) + min);
  }
}


export default new UtilsController();