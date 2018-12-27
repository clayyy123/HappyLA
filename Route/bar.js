const express = require('express');
const barCtrl = require('../Controller/bars.js');
const barRouter = new express.Router();

barRouter.route('/yelp/:name').get(barCtrl.yelpBiz);
barRouter.route('/new').post(barCtrl.create);
barRouter.route('/all').get(barCtrl.index);

module.exports = barRouter;
