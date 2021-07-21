/**
 * @param { Array } arr
 * @param { number } depth
 * @returns { Array }
 */
function flatWithDepth(arr, depth = 1) {
    const result = arr.reduce((accumulator, item) => {
        if (Array.isArray(item) && depth > 0) {
            accumulator.push(...flatWithDepth(item, depth - 1));
        } else {
            accumulator.push(item);
        }
        return accumulator;
    }, []);
    return result;
}

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

const flattenArrayIterative = (array1) => {
    const result = [];
    while (array1.length > 0) {
        const item = array1.shift();
        if (Array.isArray(item)) {
            array1 = [...item, ...array1];
        } else {
            result.push(item);
        }
    }
    return result;
};

function flatIterativeDepth(arr, depth = 1) {
    const result = [];
    const stack = [...arr.map((item) => [item, depth])];

    while (stack.length > 0) {
        const [top, depth] = stack.pop();
        if (Array.isArray(top) && depth > 0) {
            stack.push(...top.map((item) => [item, depth - 1]));
        } else {
            result.push(top);
        }
    }

    return result.reverse();
}
