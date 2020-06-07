var express = require('express');

var app = express();
var router = express.Router();
var AuthorService = require('../services/authorService');

var Author = require('../model/author');

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


//GET ALL
router.get('/', (req, res) => {

    var authorService = new AuthorService(req, res);
    authorService.all();

    console.log("get all author");
});


//GET BY ID
router.get('/getbyid/:id', (req, res) => {
    var id = req.params.id;
    var authorService = new AuthorService(req, res);
    authorService.getByID(id);
});

//POST
router.post('/add', (req, res) => {

    var author = new Author(req.body);
    console.log(req.body);
    console.log("add author : ", author);

    var authorService = new AuthorService(req, res);
    result = authorService.add(author);

});

//PUT
router.put('/update/:id', (req, res) => {
    var authorUpdate = new Author(req.body);
    console.log("update author : ", req.body);

    var authorService = new AuthorService(req, res);
    authorService.update(authorUpdate);
});

//DELETE
router.delete('/delete/:id', (req, res) => {
    var id = req.params.id;
    var authorService = new AuthorService(req, res);
    authorService.delete(id);
});

module.exports = router;