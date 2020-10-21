const RequestErrorHelper = require("./requestError.helper");
class NotFoundErrorHelper extends RequestErrorHelper {
    constructor(message) {
        super(message);
        this.status = 404;
    }
}

module.exports = NotFoundErrorHelper;