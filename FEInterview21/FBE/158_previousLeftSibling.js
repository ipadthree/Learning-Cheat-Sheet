//Given a DOM tree and a target element, please return the previous left sibling.
// BFS
function previousLeftSibling(root, target) {
    // your code here
    const queueBFS = [root];
    while (queueBFS.length) {
        const queueLength = queueBFS.length;
        let prev = null;

        for (let i = 0; i < queueLength; i++) {
            const current = queueBFS.shift();
            if (current === target) {
                return prev;
            }
            queueBFS.push(...current.children);
            prev = current;
        }
    }
    return null;
}
