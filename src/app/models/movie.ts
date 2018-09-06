export class Movie {

  constructor(_id = '', name = '', year = '') {
    this._id = _id;
    this.name = name;
    this.year = year;
  }

  _id: String;
  name: String;
  year: String;
}
