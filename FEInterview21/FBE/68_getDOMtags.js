/**
 * Given a DOM tree, please return all the tag names it has.
 * Your function should return a unique array of tags names in lowercase,
 * order doesn't matter.
 * @param {HTMLElement} tree
 * @return {string[]}
 */
function getTags(tree) {
    // your code here
    const set = new Set();
    const stack = [tree];
    while (stack.length > 0) {
        const item = stack.shift();
        set.add(item.tagName.toLowerCase());
        stack.push(...item.children);
    }
    return [...set];
}
