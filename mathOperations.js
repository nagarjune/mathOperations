// mathOperations.js
(function(global) {
    // Define the mathOperations object
    var mathOperations = {
        // Addition
        addition: function(a, b) {
            return a + b;
        },
        
        // Subtraction
        subtraction: function(a, b) {
            return a - b;
        },
        
        // Multiplication
        multiplication: function(a, b) {
            return a * b;
        },
        
        // Division
        division: function(a, b) {
            if (b === 0) {
                throw new Error("Division by zero is not allowed.");
            }
            return a / b;
        }
    };

    // Expose the mathOperations object to the global scope
    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
        module.exports = mathOperations;
    } else {
        global.mathOperations = mathOperations;
    }
})(this);