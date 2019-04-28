// Used for setting Pug as view engine
const path = require('path')

// Express Imports
const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get('/', function(request, response) {
    response.render('index');
});

app.listen(3000);