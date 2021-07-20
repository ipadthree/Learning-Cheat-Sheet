/**
 * @param {any[]} items
 * @param {number[]} newOrder
 * @return {void}
 */

// O(n) space
function sort(items, newOrder) {
    // reorder items inline
    const temp = [];
    items.forEach((item, index) => {
        temp.push({ key: newOrder[index], value: item });
    });
    temp.sort((a, b) => {
        return a.key - b.key;
    });
    for (let index in items) {
        items[index] = temp[index].value;
    }
    return items;
}

const A = ['A', 'B', 'C', 'D', 'E', 'F'];
const B = [1, 5, 4, 3, 2, 0];

console.log(sort(A, B));
