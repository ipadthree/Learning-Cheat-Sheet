/**
 * Given an array of integers, all integers appear twice except one integer, could you quickly target it ?
 */

const arr = [10, 2, 2, 1, 0, 0, 10];
findSingle(arr); // 1

function findSingle(arr) {
    // your code here
    const single = new Set();

    arr.forEach((num) => {
        if (single.has(num)) {
            single.delete(num);
        } else {
            single.add(num);
        }
    });

    const [result] = single.values();
    return result;
}
