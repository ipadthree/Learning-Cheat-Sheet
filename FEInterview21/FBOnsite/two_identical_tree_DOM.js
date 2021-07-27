/**
 * @param {HTMLElement} rootA
 * @param {HTMLElement} rootB - rootA and rootB are clone of each other
 * @param {HTMLElement} nodeA
 */
const findCorrespondingNode = (rootA, rootB, target) => {
    // your code here
    const path = [];
    while (target !== rootA) {
        path.push(Array.from(target.parentNode.childNodes).indexOf(target));
        target = target.parentNode;
    }
    path.reverse();
    let result = rootB;
    for (let index of path) {
        result = result.childNodes[index];
    }
    return result;
};

function sameNode(rootA, rootB, targetValue) {
    if (!rootA) return;
    if (rootA.val === targetValue) return rootB.val;
    const left = sameNode(rootA.left, rootB.left, targetValue);
    const right = sameNode(rootA.right, rootB.right, targetValue);
    return left || right;
}

const findCorrespondingNode = (rootA, rootB, target) => {
    // your code here
    const queueA = [rootA];
    const queueB = [rootB];

    while (queueA.length > 0 && queueB.length > 0) {
        const itemA = queueA.shift();
        const itemB = queueB.shift();

        if (itemA === target) {
            return itemB;
        }

        itemA.childNodes.length > 0 && queueA.push(...itemA.childNodes);
        itemB.childNodes.length > 0 && queueB.push(...itemB.childNodes);
    }

    return null;
};
