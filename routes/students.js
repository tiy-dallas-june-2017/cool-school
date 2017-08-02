const express = require('express');
const router = express.Router();
const student = require('../models/student');

router.get('/students', function(req, res) {

  res.render('students', {
    students: student.all()
  });
});

module.exports = router;
