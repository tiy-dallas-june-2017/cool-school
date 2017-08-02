const express = require('express');
const mustache = require('mustache-express');
const teacher = require('./models/teacher');
const mongo = require('./mongo');

const app = express();

app.use(express.static('public'));

app.engine('mustache', mustache());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.use(require('./routes/teachers'));
app.use(require('./routes/students'));

const url = 'mongodb://localhost:27017/school'
mongo.connect(url, function() {
  app.listen(3210, function() {
    console.log('Listening on port 3210.');
  });
});
