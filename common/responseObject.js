let ResponseObject = function (res_code, res_error, res_data = null) {
    this.status = res_code;
    this.message = res_error;
    this.data = res_data;
};

module.exports = ResponseObject;