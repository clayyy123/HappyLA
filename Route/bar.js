const express = require('express');
const barCtrl = require('../Controller/bars.js');
const barRouter = new express.Router();

barRouter.route('/yelp/:name').get(barCtrl.yelpBiz);
barRouter.route('/:location').get(barCtrl.index);
barRouter.route('/new').post(barCtrl.create);

module.exports = barRouter;
