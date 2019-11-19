const Person = require('../models').Person;
module.exports = {
    create(req, res) {
        return Person.create({
                first_name: req.body.first_name,
                last_name: req.body.last_name
            })
            .then(person => res.status(201).send(person))
            .catch(error => res.status(500).send(error));
    },
    show(req, res) {
        return Person.findOne({
                where: {
                    id: req.params.id
                }
            })
            .then(person => res.status(200).send(person))
            .catch(error => res.status(500).send(error));
    },
    list(req, res) {
        return Person.findAll()
            .then(persons => res.status(200).send(persons))
            .catch(error => res.status(500).send(error));
    },
    update(req, res) {
        return Person.update({
                first_name: req.body.first_name
            }, {
                where: { id: req.params.id }
            })        
            .then(person => res.status(201).send(person))
            .catch(error => res.status(500).send(error));
    },
    destroy(req,  res)  {
        return  Person.destroy({
                where:  { id: req.params.id }
            })        
            .then(person =>  res.status(200).send(person))        
            .catch(error  =>  res.status(500).send(error));
    }
};