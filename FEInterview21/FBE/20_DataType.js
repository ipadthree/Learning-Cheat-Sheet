detectType(1); // 'number'
detectType(new Map()); // 'map'
detectType([]); // 'array'
detectType(null); // 'null'

// more in judging step

function detectType(data) {
    // your code here
    if (typeof data === 'object') {
        if (data === null) return 'null';
        if (data instanceof FileReader) return 'object';
        return data.constructor.name.toLowerCase();
    }
    return typeof data;
}

/**
 * To see the DOM node class name, we can recall
 * that an object usually has the constructor property.
 * It references the class constructor, and constructor.name is its name:
 */
