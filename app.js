const express = require('express');

const app = express();

const routes = require('./routes.js');
app.use('/', routes);

//view config
const path = require('path');
app.set('views', path.join__dirname, 'views');
app.set('view engine', 'pug');

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}`));