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
