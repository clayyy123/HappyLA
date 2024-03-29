const Bar = require('../Model/bar.js');
require('dotenv').config();
const apiKey = process.env.API_KEY;
('use strict');
const yelp = require('yelp-fusion');
const client = yelp.client(apiKey);

module.exports = {
  index: (req, res) => {
    Bar.find({ location: req.params.location }, (err, allBars) => {
      console.log(allBars);
      res.json(allBars);
    });
  },

  create: (req, res) => {
    Bar.create(req.body, (err, bar) => {
      console.log(err);
      if (err) return res.json({ success: false, code: err.code });
      else res.json({ success: true, bar: bar });
    });
  },

  yelpBiz: (req, res) => {
    client
      .search({
        term: req.params.name,
        location: 'los angeles, ca'
      })
      .then(response => {
        res.json({ data: response.jsonBody.businesses[0] });
      })
      .catch(e => {
        console.log(e);
      });
  }
};
