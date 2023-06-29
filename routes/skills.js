const express = require('express');
const router = express.Router();
const skills = require('../models/skills');
const skillsController = require('../controllers/skills');

router.get('/', skillsController.index);
router.get('/:id', skillsController.show);

module.exports = router;

router.get('/skills/new', (req, res) => {
    res.render('new');
  });
  