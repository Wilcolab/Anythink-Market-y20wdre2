/**
 * Converts a string to camelCase format.
 * 
 * This function takes a string with words separated by spaces, hyphens, or underscores
 * and converts it to camelCase where the first word is lowercase and subsequent words
 * have their first letter capitalized with no separators.
 * 
 * Example:
 * toCamelCase("hello world") → "helloWorld"
 * toCamelCase("hello-world-foo") → "helloWorldFoo"
 * toCamelCase("hello_world_bar") → "helloWorldBar"
 * toCamelCase("HelloWorld") → "helloWorld"
 * 
 * @param {string} str - The input string to convert
 * @returns {string} The camelCase version of the input string
 */
function toCamelCase(str) {
    return str
        .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) => {
            if (+match === 0) return "";
            return index === 0 ? match.toLowerCase() : match.toUpperCase();
        })
        .replace(/[-_\s]/g, "");
}

module.exports = toCamelCase;