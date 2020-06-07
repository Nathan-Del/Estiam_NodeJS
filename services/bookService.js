var Book = require('../model/book');



class BookService{
    constructor(req, res){
        this.req = req;
        this.res = res;
    }

    add(addBook){
        addBook.save((err) => {
            if(err){
                this.res.send(err);
            }
            else{
                this.res.send('Livre ajouté OK');
            }
        });
    }

    all(){
        Book.find((err, allBook) => {
            if(err){
                this.res.send(err);
            }
            else{
                this.res.json(allBook);
            }
        });
    }

    getByID(id){
        Book.findById(id, (err, BookById) => {
            if(err){
                this.res.send(err);
            }
            else{
                this.res.send(BookById);
            }
        });
    }

    update(bookUpdate){
        var id = this.req.params.id;
        Book.findById(id, (err, putbook) => {
            if(err){
                this.res.send(err);
            }
            else{
                putbook.name = this.req.body.name;
                putbook.ISBM = this.req.body.ISBM;
                putbook.price = this.req.body.price;
                
                putbook.save((err) => {
                    if(err){
                        this.res.send(err);
                    }
                    else{
                        this.res.send("Mise à jour livre OK");
                    }
                });
            }
        });
    }

    delete(id){
        Book.remove({
            _id:id
        }, (err) => {
            if(err){
                this.res.send(err);
            }
            else{
                this.res.send("Livre supprimé OK");
            }
        });
    }
}

module.exports = BookService;