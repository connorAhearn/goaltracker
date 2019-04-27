const User = require('../objects/User');

test('t0: Goal progress begins at 0', function() {
    
    // Initialization
    let obj = new User("subject");

    // Test
    expect(obj.username).toBe("subject");
});