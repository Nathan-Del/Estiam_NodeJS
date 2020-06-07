var Customer = require('../model/customer');



class CustomerService{
    constructor(req, res){
        this.req = req;
        this.res = res;
    }

    add(addcustomer){
        addcustomer.save((err) => {
            if(err){
                this.res.send(err);
            }
            else{
                this.res.send('Livre ajouté OK');
            }
        });
    }

    all(){
        Customer.find((err, allCustomer) => {
            if(err){
                this.res.send(err);
            }
            else{
                this.res.json(allCustomer);
            }
        });
    }

    getByID(id){
        Customer.findById(id, (err, CustomerById) => {
            if(err){
                this.res.send(err);
            }
            else{
                this.res.send(CustomerById);
            }
        });
    }

    update(customerUpdate){
        var id = this.req.params.id;
        Customer.findById(id, (err, putcustomer) => {
            if(err){
                this.res.send(err);
            }
            else{
                putcustomer.first_name = this.req.body.first_name;
                putcustomer.last_name = this.req.body.last_name;
                putcustomer.email = this.req.body.email;
                
                putcustomer.save((err) => {
                    if(err){
                        this.res.send(err);
                    }
                    else{
                        this.res.send("Mise à jour customer OK");
                    }
                });
            }
        });
    }

    delete(id){
        Customer.remove({
            _id:id
        }, (err) => {
            if(err){
                this.res.send(err);
            }
            else{
                this.res.send("Customer supprimé OK");
            }
        });
    }
}

module.exports = CustomerService;