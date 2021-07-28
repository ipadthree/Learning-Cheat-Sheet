function traverse(matrix) {
    const columnNum = matrix[0].length;
    console.log(columnNum);
    const upperBound = 0;
    const lowerBound = matrix.length - 1;
    const result = [];
    let isUp = false;
    let row = 0;

    for (let i = 0; i < columnNum; i++) {
        if (!isUp) {
            if (row === lowerBound) {
                isUp = true;
                result.push(matrix[row][i]);
                row--;
            } else {
                result.push(matrix[row][i]);
                row++;
            }
        } else {
            if (row === upperBound) {
                isUp = false;
                result.push(matrix[row][i]);
                row++;
            } else {
                result.push(matrix[row][i]);
                row--;
            }
        }
    }

    return result.join('');
}

const matrix = [
    ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
    ['h', 'i', 'j', 'k', 'l', 'm', 'n'],
    ['o', 'p', 'q', 'r', 's', 't', 'u'],
];

// console.log(traverse(matrix));
