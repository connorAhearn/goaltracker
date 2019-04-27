const User = require('../objects/User');

/**
 * This test suite at its creation was designed to check the
 * more "configuration" based parameters of the User object.
 * 
 * At the moment, usernames are the only parameter that fits this
 * description. 
 */

test('t0: Goal progress begins at 0', function() {
    
    // Initialization
    let obj = new User("subject");

    // Test
    expect(obj.username).toBe("subject");
});