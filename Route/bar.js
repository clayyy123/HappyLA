const express = require('express');
const barCtrl = require('../Controller/bars.js');
const barRouter = new express.Router();

barRouter.route('/new').post(barCtrl.create);

barRouter.route('/yelp/:name').get(barCtrl.yelpBiz);

module.exports = barRouter;
