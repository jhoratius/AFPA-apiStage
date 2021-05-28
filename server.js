const bodyParser = require('body-parser');
const express = require('express');
const connect = express();

// Body Parser configuration
connect.use(bodyParser.urlencoded({ extended: true }));
connect.use(bodyParser.json());

// Configure routes
connect.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send('Bienvenue !');
})

// connect.use('/api/', apiRouter);

// Launch server
connect.listen(8050, function() {
    console.log('Connexion Database established !');
});