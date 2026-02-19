function toKebabCase(str) {
    // Replace underscores and hyphens with spaces to standardize separation
    let normalized = str.replace(/[_-]+/g, ' ');
    
    // Split into words by spaces and filter out empty strings
    let words = normalized.split(/\s+/).filter(word => word.length > 0);
    
    // Join words with hyphens and convert to lowercase
    return words.join('-').toLowerCase();
}

module.exports = toKebabCase;