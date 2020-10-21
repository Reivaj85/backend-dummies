class RequestErrorHelper extends Error {
    constructor(message) {
        super(message);
        this.message = message;
        Error.captureStackTrace(this, this.constructor);
        this.name = this.constructor.name
    }
}
module.exports = RequestErrorHelper;