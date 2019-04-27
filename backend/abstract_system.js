const User = require("./User.js");

let current_user;

function login(username) {
    current_user = new User(username);
}
