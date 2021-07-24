/**
 * @param {HTMLElement | null} tree
 * @return {number}
 */
function getHeight(tree) {
    // your code here
    if (!tree) {
        return 0;
    }
    let height = 0;
    for (let child of tree.children) {
        height = Math.max(getHeight(child), height);
    }
    return height + 1;
}
