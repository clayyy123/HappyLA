const Bar = require('../Model/bar.js');

module.exports = {
  create: (req, res) => {
    Bar.create(req.body, (err, bar) => {
      if (err) return res.json({ success: false, code: err.code });
      else res.json({ success: true, bar: bar });
    });
  }
};
