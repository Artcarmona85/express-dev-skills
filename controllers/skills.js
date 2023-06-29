const skills = require('../models/skills');

module.exports = {
  index: (req, res) => {
    res.render('skills/index', { skills });
  },

  show: (req, res) => {
    const skill = skills.find((skill) => skill.id === req.params.id);
    res.render('skills/show', { skill });
  },

  new: (req, res) => {
    res.render('skills/new');
  },

  create: (req, res) => {
    
    res.redirect('/skills');
  }
};
