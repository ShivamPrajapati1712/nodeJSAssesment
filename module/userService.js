
class UserService {

    constructor() {
    }

    /**
     * service layer function Verify user details and perform business logic
     * @param {*} userRequestDetails 
     * @returns 
     */
    async userLoginDetailsCheck(userRequestDetails) {

        try {

            /**
             * Here we can communicate with model layer, perform DB operation, business logic etc
             */

            let message = `Hello ${userRequestDetails.firstName} ${userRequestDetails.lastName}, Thank you for signing up. Your account is now created`;
            if (userRequestDetails.subscribeNewsLetter) {
                message = `Hello ${userRequestDetails.firstName} ${userRequestDetails.lastName}, Thank you for signing up. Your account is now created.You would be receiving our periodic newsletters to your email: ${userRequestDetails.email}`
            }
            let resposeObj = {
                userToken: 'If any token used for further authentiction',
                message: message
            }
            // Here if user data does not match or not validate we can return false from here
            return resposeObj;
        } catch (exception) {
            throw new Error(exception)
        }
    }
}

module.exports = UserService;