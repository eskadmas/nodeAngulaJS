const Contact = require('../models').Contact;
module.exports = {
    create(req, res) {
        return Contact.create({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                phone: req.body.phone,
                email: req.body.email
            })
            .then(contact => res.status(201).send(contact))
            .catch(error => {
                console.error(error);
                return res.status(500).send(error);
            });
    },
    show(req, res) {
        return Contact.findOne({
                where: {
                    id: req.params.id
                }
            })
            .then(contact => res.status(200).send(contact))
            .catch(error => res.status(500).send(error));
    },
    list(req, res) {
        return Contact.findAll()
            .then(contacts => res.status(200).send(contacts))
            .catch(error => res.status(500).send(error));
    },
    update(req, res) {
        return Contact.update({
                phone: req.body.phone
            }, {
                where: { id: req.params.id }
            })        
            .then(contact => res.status(201).send(contact))
            .catch(error => res.status(500).send(error));
    },
    destroy(req, res) {
        return Contact.destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(contact => res.status(200).send(contact))
            .catch(error => res.status(500).send(error));
    }
};