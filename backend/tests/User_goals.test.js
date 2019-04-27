const User = require('../objects/User');

/**
 * This test suite is based on checking the parameters of
 * progressing on a goal held by a user object. 
 * 
 * Tests t0 amd t1 are based on goals that are represented
 * by a natural number. At their time of being written, these
 * were the only goal types that were permitted. 
 */

test('t0: Goal progress begins at 0', function() {
    
    // Initialization
    let obj = new User("subject");

    // Test
    expect(obj.goal).toBe(0);
});

test('t1_0: Goal progress increments by 1 - 1', function() {
    
    // Initialization
    let obj = new User("subject");

    // Setup - One step of progress
    obj.progress();

    // Test
    expect(obj.goal).toBe(1);
});

test('t1_1: Goal progress increments by 1 - 50', function() {
    
    // Initialization
    let obj = new User("subject");

    // Setup - 50 steps of progress
    for(let i = 0; i < 50; i++) {
        obj.progress();
    }
    
    // Test
    expect(obj.goal).toBe(50);
});

test('t1_2: Goal progress increments by 1 - Random Value', function() {
    
    
    // Initialization
    let obj = new User("subject");
    let randy = Math.round(Math.random() * 100);    // Had to be rounded since JS numbers (primitive type) are floats by default

    // Setup - A random amount of steps of progress
    for(let i = 0; i < randy; i++) {
        obj.progress();
    }
    
    // Test
    expect(obj.goal).toBe(randy);
});