const express = require('express');
const router = express.Router();
const student = require('../models/student');

router.get('/students', function(req, res) {

  student.all(function(docs) {
    res.render('students', {
      students: docs
    });
  });
});

module.exports = router;
