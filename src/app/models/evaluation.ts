export class Evaluation {

  constructor(_id = '', name = '', movie = '', evaluation = '') {
    this._id = _id;
    this.name = name;
    this.movie = movie;;
    this.evaluation = evaluation;
  }

  _id: String;
  name: String;
  movie: String;
  evaluation: String;
}
