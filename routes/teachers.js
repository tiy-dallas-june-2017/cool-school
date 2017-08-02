const express = require('express');
const router = express.Router();
const teacher = require('../models/teacher');

router.get('/teachers', function(req, res) {
  res.render('teachers', {
    teachers: teacher.all()
  })
});

module.exports = router;
