const express = require('express');
const mustache = require('mustache-express');

const app = express();

app.use(express.static('public'));

app.engine('mustache', mustache());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.get('/teachers', function(req, res) {
  res.render('teachers', {
    teachers: [
      { name: 'Teacher 1', age: 30 },
      { name: 'Teacher 2', age: 31 }
    ]
  });
});

app.listen(3210, function() {
  console.log('Listening on port 3210.');
});
