const express = require('express');
const app = express();

app.get('/', function(request, response) {
    response.send('it worked!');
});

app.listen(3000);