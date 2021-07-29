///////////////////////////////////Recursive/////////////////////////////////////////////

var serialize = function (root) {
    if (!root) return '_';

    return `${root.val},${serialize(root.left)},${serialize(root.right)}`;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    const dataArray = data.split(',');

    return helper(dataArray);

    function helper(dataArray) {
        if (!dataArray.length) return null;
        const item = dataArray.shift();
        if (item !== '_') {
            const node = new TreeNode(item);
            node.left = helper(dataArray);
            node.right = helper(dataArray);
            return node;
        }
        return null;
    }
};

///////////////////////////////////Iteration/////////////////////////////////////////////

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
function serializeIterative(root) {
    if (!root) return [];
    let result = [];
    let queue = [];
    queue.push(root);
    while (queue.length) {
        let length = queue.length;
        for (let i = 0; i < length; i++) {
            let node = queue.shift();
            if (!node) {
                result.push(node);
            } else {
                result.push(node.val);
                queue.push(node.left);
                queue.push(node.right);
            }
        }
    }
    return result;
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
function deserializeIterative(data) {
    if (data.length === 0) return null;
    let queue = [];
    let root = new TreeNode(data[0]);
    queue.push(root);
    for (let i = 1; i < data.length; i++) {
        let parent = queue.shift();
        if (data[i] !== null) {
            let left = new TreeNode(data[i]);
            parent.left = left;
            queue.push(left);
        }
        i += 1;
        if (data[i] !== null) {
            let right = new TreeNode(data[i]);
            parent.right = right;
            queue.push(right);
        }
    }
    return root;
}


