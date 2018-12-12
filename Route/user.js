const express = require('express');
const userCtrl = require('../Controller/users');
const userRouter = new express.Router();

userRouter.route('/new').post(userCtrl.create);

module.exports = userRouter;
