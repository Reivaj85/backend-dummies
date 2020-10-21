const RequestErrorHelper = require("./requestError.helper");
class BadRequest extends RequestErrorHelper {
    constructor(message) {
        super(message);
        this.status = 400;
    }
}

module.exports = BadRequest;