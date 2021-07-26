/**
 * DOM Store Class, Map-like, store DOM as key
 * DOMStore has three methods: set, get, has.
 * The DOMStore should be able to store a DOM Node and return the value associated with the particular Node.
 */
/**
 * 如果不用Map的话，就把value直接存到node自己身上。O(1),但是mutate 原来数据
 */
class DOMStore {
    constructor() {
        this.domStoreIdentifier = Symbol();
    }

    set(node, value) {
        node[this.domStoreIdentifier] = value;
    }

    get(node) {
        return node[this.domStoreIdentifier];
    }

    has() {
        return !!node[this.domStoreIdentifier];
    }
}

/*用indexOf..存keys, values : O(n) for all operations*/
class DOMStore {
    constructor() {
        this.keys = [];
        this.values = [];
    }
    set(node, value) {
        const index = this.keys.indexOf(node);
        if (index >= 0) {
            this.values[index] = value;
        } else {
            this.values.push(value);
            this.keys.push(node);
        }
    }
    get(node) {
        const index = this.keys.indexOf(node);
        return index >= 0 ? this.values[index] : undefined;
    }
    has(node) {
        return !!this.get(node);
    }
}

/*建一个custom structure*/
class NewNode {
    constructor(node, value) {
        this.node = node;
        this.value = value;
    }
    getNode() {
        return this.node;
    }
    getValue() {
        return this.value;
    }
    setValue(value) {
        this.value = value;
    }
}

class NodeStore {
    constructor() {
        this.store = [];
    }
    set(node, value) {
        if (this.has(node)) {
            const targetNewNode = this.store.find(
                (newNode) => newNode && newNode.getNode() === node
            );
            targetNewNode.setValue(value);
        } else {
            const newNode = new NewNode(node, value);
            this.store.push(newNode);
        }
    }
    get(node) {
        const target = this.store.find((newNode) => newNode && newNode.getNode() === node);
        if (!!target) {
            return target.getValue();
        }
        return undefined;
    }
    has(node) {
        return !!this.get(node);
    }
}

//----------------------------------------flat array--------------------------------------------------//

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

//------------------------------------Identical DOM tree------------------------------------------------------//

function sameNode(rootA, rootB, targetValue) {
    if (!rootA) return;
    if (rootA.val === targetValue) return rootB.val;
    const left = sameNode(rootA.left, rootB.left, targetValue);
    const right = sameNode(rootA.right, rootB.right, targetValue);
    return left || right;
}

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

//------------------------------------Identical DOM tree------------------------------------------------------//

//Animation!!!
//give distance, time as parameter, write a function can do animation that move a box from left side to right side.
