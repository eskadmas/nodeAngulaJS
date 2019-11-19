const contactcontroller = require('../controllers').contact;
const personcontroller = require('../controllers').person;

module.exports = (app) => {
    app.get('/api', (req, res) => res.status(200).send({
        message: 'Welcome to the TODOS API!'
    }));

    /** Implementation of API operations on Contacts and Person  */
    app.post('/api/contacts', contactcontroller.create);
    app.post('/api/contacts/:id', contactcontroller.create);
    app.put('/api/contacts/:id', contactcontroller.update);
    app.get('/api/contacts/:id', contactcontroller.show);
    app.get('/api/contacts', contactcontroller.list);
    app.delete('/api/contacts/:id', contactcontroller.destroy);
    app.post('/api/persons', personcontroller.create);
    app.put('/api/persons/:id', personcontroller.update);
    app.get('/api/persons/:id', personcontroller.show);
    app.get('/api/persons', personcontroller.list);
    app.delete('/api/persons/:id', personcontroller.destroy);
};