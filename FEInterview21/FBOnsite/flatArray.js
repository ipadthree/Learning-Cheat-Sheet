const test = [1, 2, 3, [4, 5, 6, [7, 8, 9, [10]]]];

const flattenArray = (array1) => {
    const result = array1.reduce((accumulator, item) => {
        if (Array.isArray(item)) {
            /**
             * 直接返回accumulator.push(item)的话
             * push 是返回item值
             */
            accumulator.push(...flattenArray(item));
        } else {
            accumulator.push(item);
        }
        return accumulator;
    }, []);
    return result;
};

const flattenArrayIterative = (arr) => {
    const result = [];
    while (arr.length > 0) {
        const item = arr.shift();
        if (Array.isArray(item)) {
            arr = [...item, ...arr];
        } else {
            result.push(item);
        }
    }
    return result;
};

/**
 * @param { Array } arr
 * @param { number } depth
 * @returns { Array }
 */
function flat(arr, depth = 1) {
    // your implementation here
    return helper(arr, depth);
}

function helper(arr, remainder) {
    const result = arr.reduce((accumulator, item) => {
        if (Array.isArray(item) && remainder > 0) {
            accumulator.push(...helper(item, remainder - 1));
        } else {
            accumulator.push(item);
        }
        return accumulator;
    }, []);
    return result;
}

/**
 * @param { Array } arr
 * @param { number } depth
 * @returns { Array }
 */
function flatIterative(arr, depth = 1) {
    const newArray = arr.map((item) => [item, depth]);
    const result = [];
    while (newArray.length > 0) {
        const [item, depth] = newArray.shift();
        if (Array.isArray(item) && depth > 0) {
            newArray.unshift(...item.map((atom) => [atom, depth - 1]));
        } else {
            result.push(item);
        }
    }
    return result;
}
