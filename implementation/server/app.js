// Used for setting Pug as view engine
const path = require('path')

// Express Imports
const express = require('express');
const app = express();

// Setting Pug as the view engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get('/', function(request, response) {
    response.render('home');
});

/**
 * Tracking page models the future home page that
 * will be seen by the users once they log in
 */
app.get('/tracking', function (request, response) {
    response.render('tracking', { username: 'test', progress: 33 });
});

/**
 * Right now the request object from the page doesn't 
 * actually hold any data, the existence of the 
 * post calls themselves is what information is derived
 * from
 */
app.post('/data/', function (request, response) {
    console.log('A request was made');
});

// Listening on port 3000
app.listen(3000);