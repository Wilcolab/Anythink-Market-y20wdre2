function toKebabCase(input) {
    // Step 1: Validate input
    if (input === null || input === undefined || typeof input !== 'string') {
        throw new TypeError('Input must be a string');
    }

    // Step 2: Normalize the string
    let normalized = input
        .trim()
        .toLowerCase()
        .replace(/_/g, ' ')
        .replace(/([a-z])([A-Z])/g, '$1 $2');

    // Step 3: Transform the string
    const kebab = normalized
        .split(' ')
        .map(word => word.replace(/[^a-z0-9]/g, ''))
        .filter(word => word.length > 0)
        .join('-');

    return kebab;
}

module.exports = toKebabCase;