const {  generateToken }  = require("../helpers/jwt/jw.helper");
let  _userService = null;

class AuthService  {
    constructor({ UserService }) {
        _userService = UserService;
    }

    async signUp(user){
        const { username } = user;
        const userExist = await _userService.getUserByName(username);
        if(userExist){
            const error = new Error();
            error.status = 400;
            error.message = "User already exist";
            throw error;
        }

        return await _userService.create(user);
    }

    async signIn(user){
        const { username, password } = user;
        const userExist = await _userService.getUserByName(username);
        if(!userExist){
            const error = new Error("User does not exist");
            error.status = 404;
            throw error;
        }
        const validPassword = userExist.comparePasswords(password);
        if(!validPassword){
            const error = new Error("Invalid Password");
            error.status = 401;
            throw error;
        }
        const userToEncode = {
            username: userExist.username,
            id: userExist._id
        };

        const token = generateToken(userToEncode);
        return { token, user: userExist };
    }
}

module.exports = AuthService;