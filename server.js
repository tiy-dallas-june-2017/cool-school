const express = require('express');

const app = express();

app.use(express.static('public'));

app.listen(3210, function() {
  console.log('Listening on port 3210.');
});
