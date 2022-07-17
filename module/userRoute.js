const { Router } = require('express');
const UserController = require('./userController');
const { validateUserDetails } = require('./validator');

const UserRoute = new Router()

/**
 * Router for user module
 * @param {*} router 
 */
 UserRoute.post('/api/users', validateUserDetails(), UserController.userLogin);
module.exports = {
    UserRoute
};