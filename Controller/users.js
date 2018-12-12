const User = require('../Model/user.js');

module.exports = {
  create: (req, res) => {
    User.create(req.body, (err, user) => {
      console.log('hi');
      if (err) res.json({ success: false, code: err.code });
      else res.json({ success: true, user: user });
    });
  }
};
