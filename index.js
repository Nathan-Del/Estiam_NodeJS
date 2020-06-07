const express = require('express');
const bookRoot = require('./root/bookRoute');
const authorRoot = require('./root/authorRoute');
const customerRoot = require('./root/customerRoute');
const app = express();
const bodyParser = require('body-parser');
var mongoose = require('mongoose');


var urlDB = "mongodb://localhost:27017/Estiam-NodeJS-DB";
mongoose.connect(urlDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

var db = mongoose.connection;
db.on('error', console.error.bind(console,"Erreur de connexion à la base de donnée"));

db.once('open', ()=> {
    console.log("Connexion à la base de donnée OK");
});



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));

app.use('/book', bookRoot);
app.use('/author', authorRoot);
app.use('/customer', customerRoot);


app.listen(3000, () => {
    console.log('Serveur Lancée...');
});



//git du prof : https://github.com/ISEstiam/JavascriptAdvanced-NodeJs/tree/master/exercices/exerciceMongoDBApps