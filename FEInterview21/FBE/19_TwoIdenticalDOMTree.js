function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

const rootA = new TreeNode('a');
const rootA21 = new TreeNode('a21');
const rootA22 = new TreeNode('a22');
const rootA31 = new TreeNode('a31');
rootA.left = rootA21;
rootA.right = rootA22;
rootA21.left = rootA31;

const rootB = new TreeNode('b');
const rootB21 = new TreeNode('b21');
const rootB22 = new TreeNode('b22');
const rootB31 = new TreeNode('b31');
rootB.left = rootB21;
rootB.right = rootB22;
rootB21.left = rootB31;

function sameNode(rootA, rootB, targetValue) {
    if (!rootA) return;
    if (rootA.val === targetValue) return rootB.val;
    const left = sameNode(rootA.left, rootB.left, targetValue);
    const right = sameNode(rootA.right, rootB.right, targetValue);
    return left || right;
}

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

/**
 * @param {HTMLElement} rootA
 * @param {HTMLElement} rootB - rootA and rootB are clone of each other
 * @param {HTMLElement} nodeA
 */
const findCorrespondingNode = (rootA, rootB, target) => {
    // your code here
    const queue = [rootA];
    const queueB = [rootB];
    while (queue.length > 0) {
        const queueLength = queue.length;
        for (let index = 0; index < queueLength; index++) {
            if (queue[index] === target) {
                return queueB[index];
            }
            queue.push(...queue[index].childNodes);
            queueB.push(...queueB[index].childNodes);
        }
    }
};
