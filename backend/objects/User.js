/**
 * User object used when users login
 * 
 * The user object only supports discrete type goals. This meaning
 * goals where their progress is represented by a natrual number.
 * 
 * @param {String} username Username for the new user
 */
let User = function (username) {

    // Goals by default have made no progress 
    this.goal = 0;

    // E4: The system separates user data by username
    this.username = username;

    // Making discrete progress, the goal increments by one
    this.progress = function () {
        this.goal++;
    }
}

module.exports = User;