/**
 * Converts a space-separated string to camelCase format.
 * 
 * @function convertToCamelCase
 * @description Transforms input text by converting the first word to lowercase and
 * capitalizing the first letter of each subsequent word, then joining them without spaces.
 * 
 * @param {string} input - The input string to convert. Must be a non-empty string with
 * at least one word. Words are separated by whitespace characters.
 * 
 * @returns {string} The converted camelCase string. The first word remains lowercase,
 * and all subsequent words have their first character uppercased with remaining
 * characters lowercased.
 * 
 * @throws {Error} Throws an error if input is not a string type.
 * @throws {Error} Throws an error if input is empty or contains only whitespace.
 * 
 * @example
 * convertToCamelCase('hello world'); // Returns: 'helloWorld'
 * convertToCamelCase('123 apple pie'); // Returns: '123ApplePie'
 */

/**
 * Converts a space-separated string to dot.case format.
 * 
 * @function convertToDotCase
 * @description Transforms input text by converting all characters to lowercase and
 * joining words with dot (.) separators instead of spaces.
 * 
 * @param {string} input - The input string to convert. Must be a non-empty string with
 * at least one word. Words are separated by whitespace characters.
 * 
 * @returns {string} The converted dot.case string. All characters are lowercase and
 * words are joined with dots as separators.
 * 
 * @throws {Error} Throws an error if input is not a string type.
 * @throws {Error} Throws an error if input is empty or contains only whitespace.
 * 
 * @example
 * convertToDotCase('hello world'); // Returns: 'hello.world'
 * convertToDotCase('hello world test'); // Returns: 'hello.world.test'
 */
function convertToCamelCase(input) {    
    if (typeof input !== 'string') {
        throw new Error('Input must be a string type');
    }

    if (input.trim() === '') {
        throw new Error('Input cannot be empty or whitespace only');
    }

    return input
        .split(/\s+/)
        .map((word, index) => {
            if (index === 0) {
                return word.toLowerCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');
}

// Example usage:
console.log(convertToCamelCase('hello world')); // 'helloWorld'
console.log(convertToCamelCase('123 apple pie')); // '123ApplePie'

try {
    convertToCamelCase(123);
} catch (error) {
    console.error(error.message); // 'Input must be a string type'
}

function convertToDotCase(input) {
    if (typeof input !== 'string') {
        throw new Error('Input must be a string type');
    }

    if (input.trim() === '') {
        throw new Error('Input cannot be empty or whitespace only');
    }

    return input
        .split(/\s+/)
        .map(word => word.toLowerCase())
        .join('.');
}

// Example usage:
console.log(convertToDotCase('hello world')); // 'hello.world'
console.log(convertToDotCase('hello world test')); // 'hello.world.test'

try {
    convertToDotCase(123);
} catch (error) {
    console.error(error.message); // 'Input must be a string type'
}