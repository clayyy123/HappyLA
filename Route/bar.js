const express = require('express');
const barCtrl = require('../Controller/bars.js');
const barRouter = new express.Router();

barRouter.route('/new').post(barCtrl.create);

module.exports = barRouter;
