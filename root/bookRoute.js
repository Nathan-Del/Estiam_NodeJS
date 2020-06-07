var express = require('express');

var app = express();
var router = express.Router();
var BookService = require('../services/bookService');

var Book = require('../model/book');

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


//GET ALL
router.get('/', (req, res) => {

    var bookService = new BookService(req, res);
    tabBook = bookService.all();

    console.log("get all book");
});


//GET BY ID
router.get('/getbyid/:id', (req, res) => {
    var id = req.params.id;
    var bookService = new BookService(req, res);
    getBook = bookService.getByID(id);
});

//POST
router.post('/add', (req, res) => {

    var book = new Book(req.body);
    console.log(req.body);
    console.log("add book : ", book);

    var bookService = new BookService(req, res);
    result = bookService.add(book);

});

//PUT
router.put('/update/:id', (req, res) => {
    var bookUpdate = new Book(req.body);
    console.log("update book : ", req.body);

    var bookService = new BookService(req, res);
    bookService.update(bookUpdate);
});

//DELETE
router.delete('/delete/:id', (req, res) => {
    var id = req.params.id;
    var bookService = new BookService(req, res);
    bookService.delete(id);
});

module.exports = router;