const { body } = require('express-validator')

/**
 * Function validator to validate request body
 * @returns array
 */
const validateUserDetails = function () {
    return [
        body('firstName')
            .exists()
            .withMessage('firstName is required!'),
        body('lastName')
            .exists()
            .withMessage('lastName is required!'),
        body('email')
            .exists()
            .withMessage('email is required!'),
        body('password')
            .exists()
            .withMessage('password is required!')
            .isLength({ min: 8 })
            .withMessage('Must be at least 8 character'),
    ]
}
module.exports = {
    validateUserDetails: validateUserDetails
};