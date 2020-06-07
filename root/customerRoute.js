var express = require('express');

var app = express();
var router = express.Router();
var CustomerService = require('../services/customerService');

var Customer = require('../model/customer');

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


//GET ALL
router.get('/', (req, res) => {

    var customerService = new CustomerService(req, res);
    customerService.all();

    console.log("get all customer");
});


//GET BY ID
router.get('/getbyid/:id', (req, res) => {
    var id = req.params.id;
    var customerService = new CustomerService(req, res);
    customerService.getByID(id);
});

//POST
router.post('/add', (req, res) => {

    var customer = new Customer(req.body);
    console.log(req.body);
    console.log("add customer : ", customer);

    var customerService = new CustomerService(req, res);
    result = customerService.add(customer);

});

//PUT
router.put('/update/:id', (req, res) => {
    var customerUpdate = new Customer(req.body);
    console.log("update customer : ", req.body);

    var customerService = new CustomerService(req, res);
    customerService.update(customerUpdate);
});

//DELETE
router.delete('/delete/:id', (req, res) => {
    var id = req.params.id;
    var customerService = new CustomerService(req, res);
    customerService.delete(id);
});

module.exports = router;