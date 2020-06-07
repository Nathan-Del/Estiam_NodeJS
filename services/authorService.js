var Author = require('../model/author');



class AuthorService{
    constructor(req, res){
        this.req = req;
        this.res = res;
    }

    add(addAuthor){
        addAuthor.save((err) => {
            if(err){
                this.res.send(err);
            }
            else{
                this.res.send('Livre ajouté OK');
            }
        });
    }

    all(){
        Author.find((err, allAuthor) => {
            if(err){
                this.res.send(err);
            }
            else{
                this.res.json(allAuthor);
            }
        });
    }

    getByID(id){
        Author.findById(id, (err, AuthorById) => {
            if(err){
                this.res.send(err);
            }
            else{
                this.res.send(AuthorById);
            }
        });
    }

    update(authorUpdate){
        var id = this.req.params.id;
        Author.findById(id, (err, putauthor) => {
            if(err){
                this.res.send(err);
            }
            else{
                putauthor.first_name = this.req.body.first_name;
                putauthor.last_name = this.req.body.last_name;
                putauthor.email = this.req.body.email;
                
                putauthor.save((err) => {
                    if(err){
                        this.res.send(err);
                    }
                    else{
                        this.res.send("Mise à jour author OK");
                    }
                });
            }
        });
    }

    delete(id){
        Author.remove({
            _id:id
        }, (err) => {
            if(err){
                this.res.send(err);
            }
            else{
                this.res.send("Author supprimé OK");
            }
        });
    }
}

module.exports = AuthorService;