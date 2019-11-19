const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
// This will be our application entry. We'll setup our server here.
const http = require('http');
// Set up the express app
const app = express();
// Log requests to the console.
app.use(logger('dev'));
// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//Models
const models = require('./models');
//Sync Database
models.sequelize.sync().then(function() {
    console.log('Nice! Database looks fine!');
}).catch(function(err) {
    console.log(err, "Something went wrong with the Database Update!");
});
//Require routes into the application
require('./routes')(app);

//const exports = module.exports = {};

app.use('/', express.static('public'));

// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to the beginning of My First Application!'
}));

const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);
//const server = http.createServer(app);
//server.listen(port);
const server = app.listen(8000, function() {
    console.log('The test is performed on port 8000');
});

module.exports = app;

exports.closeServer = function() {
    server.close();
};