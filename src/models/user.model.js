const mongoose = require("mongoose");
const { Schema } = mongoose;
const { compareSync, hashSync, genSaltSync } = require("bcryptjs");

const UserSchema = new Schema({
    name: { type: String, required: true },
    username: { type:String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: false }
});

UserSchema.methods.toJSON = function (){
    let user = this.toObject();
    delete user.password;
    return user;
};

UserSchema.methods.comparePasswords = function (password){
    return compareSync(password, this.password);
};

UserSchema.pre("save", async function (next){
    const user = this;
    if(!user.isModified("password")){
        return next();
    }
    const salt = genSaltSync(10);
    user.password = hashSync(user.password, salt);
    next();
});

module.exports = mongoose.model("user", UserSchema);