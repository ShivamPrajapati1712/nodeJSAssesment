const UserService = require('./userService');
const { validationResult } = require('express-validator');
const ResponseObject = require("../common/responseObject")

/**
 * controller function which routes to service layer and sends response
 * @param {*} request 
 * @param {*} response 
 * @param {*} next 
 * @returns JSON object
 */
exports.userLogin = async (request, response, next) => {
    try {
        // check request validator result 
        const error = validationResult(request);
        if (!error.isEmpty()) {
            response.status(400).send(new ResponseObject(400, "Validation Error", error));
            return;
        }

        let userRequestDetails = request.body;
        const userService = new UserService();
        let userLoginResult = await userService.userLoginDetailsCheck(userRequestDetails);
        if (userLoginResult) {
            response.status(200).send(new ResponseObject(200, "Login Successfull!", userLoginResult));
        } else {
            response.status(400).send(new ResponseObject(200, "Login unsucessfull!"));
        }

    } catch (exception) {
        response.status(400).send(new ResponseObject(500, "Error Occured!"));
    }
};