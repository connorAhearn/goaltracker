const User = require('../objects/User');

test('t0: Goal progress begins at 0', function() {
    
    // Initialization
    let obj = new User("subject");

    // Test
    expect(obj.goal).toBe(0);
});

test('t1_0: Goal progress increments by 1 - 1', function() {
    
    // Initialization
    let obj = new User("subject");

    // Setup
    obj.progress();

    // Test
    expect(obj.goal).toBe(1);
});

test('t1_1: Goal progress increments by 1 - 50', function() {
    
    // Initialization
    let obj = new User("subject");

    // Setup
    for(let i = 0; i < 50; i++) {
        obj.progress();
    }
    
    // Test
    expect(obj.goal).toBe(50);
});

test('t1_2: Goal progress increments by 1 - Random Value', function() {
    
    
    // Initialization
    let obj = new User("subject");
    let randy = Math.round(Math.random() * 100);

    // Setup
    for(let i = 0; i < randy; i++) {
        obj.progress();
    }
    
    // Test
    expect(obj.goal).toBe(randy);
});