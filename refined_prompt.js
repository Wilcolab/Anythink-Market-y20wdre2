/**
 * Converts a string to camelCase format.
 * 
 * Normalizes input by handling multiple separators (hyphens, underscores, spaces),
 * then formats the result as camelCase with the first word in lowercase and
 * subsequent words capitalized.
 * 
 * @param {string} input - The input string to convert to camelCase
 * @returns {string} The converted camelCase string
 * @throws {TypeError} If input is not a string
 * 
 * @example
 * toCamelCase('hello-world') // returns 'helloWorld'
 * toCamelCase('hello_world_foo') // returns 'helloWorldFoo'
 * toCamelCase('hello world foo') // returns 'helloWorldFoo'
 * toCamelCase('') // returns ''
 */

/**
 * Converts a string to dot.case format.
 * 
 * Normalizes input by handling multiple separators (hyphens, underscores, spaces),
 * then formats the result as dot.case with all words lowercase and separated by dots.
 * 
 * @param {string} input - The input string to convert to dot.case
 * @returns {string} The converted dot.case string
 * @throws {TypeError} If input is not a string
 * 
 * @example
 * toDotCase('hello-world') // returns 'hello.world'
 * toDotCase('hello_world_foo') // returns 'hello.world.foo'
 * toDotCase('hello world foo') // returns 'hello.world.foo'
 * toDotCase('') // returns ''
 */
function toCamelCase(input) {
    if (typeof input !== 'string') {
        throw new TypeError('Input must be a string');
    }

    if (input === '') {
        return '';
    }

    // Trim extra spaces and replace separators (hyphens, underscores, spaces) with spaces
    const normalized = input.trim().replace(/[-_\s]+/g, ' ');

    // Split by spaces, filter out empty strings, and process each word
    const words = normalized.split(' ').filter(word => word.length > 0);

    if (words.length === 0) {
        return '';
    }

    // Convert to camelCase
    return words
        .map((word, index) => {
            // Remove non-alphanumeric characters
            const cleaned = word.replace(/[^a-zA-Z0-9]/g, '');
            
            if (index === 0) {
                // First word: lowercase
                return cleaned.toLowerCase();
            }
            // Subsequent words: capitalize first letter, lowercase the rest
            return cleaned.charAt(0).toUpperCase() + cleaned.slice(1).toLowerCase();
        })
        .join('');
}

module.exports = toCamelCase;

function toDotCase(input) {
    if (typeof input !== 'string') {
        throw new TypeError('Input must be a string');
    }

    if (input === '') {
        return '';
    }

    // Trim extra spaces and replace separators (hyphens, underscores, spaces) with spaces
    const normalized = input.trim().replace(/[-_\s]+/g, ' ');

    // Split by spaces, filter out empty strings, and process each word
    const words = normalized.split(' ').filter(word => word.length > 0);

    if (words.length === 0) {
        return '';
    }

    // Convert to dot.case
    return words
        .map(word => {
            // Remove non-alphanumeric characters and convert to lowercase
            return word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        })
        .join('.');
}

module.exports = { toCamelCase, toDotCase };

