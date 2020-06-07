var mongoose = require('mongoose');

//Le schéma de la BDD
const bookSchema = new mongoose.Schema({
    name : String,
    ISBM : String,
    price : String,
    //id_author : String
});

class Book {
    constructor(name, ISBM, price){
        //this._id = id;
        this.name = name;
        this.ISBM = ISBM;
        this.price = price;
        //this.id_author = this.id_author;
    }
}


module.exports = mongoose.model('Book', bookSchema);