const UserController = require('./userController');
const { validateUserDetails } = require('./validator');

/**
 * Router for user module
 * @param {*} router 
 */
exports.routesConfig = function (router) {
    router.post('/api/users', validateUserDetails(), UserController.userLogin);
};

