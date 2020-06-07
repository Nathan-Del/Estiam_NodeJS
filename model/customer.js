var mongoose = require('mongoose');

//Le schéma de la BDD
const customerSchema = new mongoose.Schema({
    first_name : String,
    last_name : String,
    email : String,
});

class Customer {
    constructor(first_name, last_name, email){
        //this._id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
    }
}


module.exports = mongoose.model('Customer', customerSchema);