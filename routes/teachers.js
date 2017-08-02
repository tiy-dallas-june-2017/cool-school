const express = require('express');
const router = express.Router();
const teacher = require('../models/teacher');

router.get('/teachers', function(req, res) {

  teacher.all(function(docs) {
    res.render('teachers', { teachers: docs })
  });

});

module.exports = router;
