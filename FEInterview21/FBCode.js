const arr = [
    {
        car: 'honda',
        name: 'John',
    },
    {
        car: 'bmw',
        name: 'Johnny',
        os: 'ios',
    },
    {
        car: 'toyota',
        name: 'JohnX',
        os: 'android',
    },
];
const arr2 = [
    {
        car: 'honda',
    },
    {
        os: 'android',
    },
];

const getMap = (arr) => {
    const myMap = {};
    arr.forEach(element => {
        for (let key in element) {
            if (!myMap[key]) {
                myMap[key] = [element[key]];
            } else {
                myMap[key].push(element[key]);
                // might be duplicate
            }
        }
    });
    return myMap;
}

const removeArrayItem = (array1, array2) => {
    const myMap = getMap(array2);
    const result = array1.filter((item) => {
        for (let key in item) {
            if (myMap[key] && myMap[key].includes(item[key])) {
                return false;
            }
        }
        return true;
    });
    return result;
}

// console.log(removeArrayItem(arr, arr2));

const test = [1,2,3, [4,5,6, [7,8,9, [10]]]];

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
        return accumulator
    }, []);
    return result;
}

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
}

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
    // your imeplementation here
    const newArray = arr.map(item => [item, depth]);
    const result = [];
    while(newArray.length > 0) {
      const [item, depth] = newArray.shift();
      if (Array.isArray(item) && depth > 0) {
        newArray.unshift(...item.map(atom => [atom, depth-1]));
      } else {
        result.push(item);
      }
    }
    return result;
  }

// console.log(flattenArray(test));
// console.log(flattenArrayIterative(test));


function throttle(func, duration) {
    let shouldWait = false;

    return function (...args) {
        if (!shouldWait) {
            func.apply(this, args);
            shouldWait = true;
            /**
             * 这里不能用arrow function，要不然this就乱了
            */
            setTimeout(function() {
                shouldWait = false;
            }, duration);
        }
    }
}

function debounce(func, duration) {
    let timeout = null;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.apply(this, args)
        }, duration);
    }
}

/**
 * 有immediate leading
*/

const debounce2 = (func, wait, immediate) => {
    let timer = null;
    return function(...args) {
        clearTimeout(timer);
        if (immediate) {
            let callNow = !timer;
            timer = setTimeout(() => {
                timer = null;
            }, wait);
            if (callNow) {
                func.apply(this, args);
            }
        } else {
            timer = setTimeout(() => {
                func.apply(this, args);
            }, wait);
        }

    }
}

const throttle = (func, wait) => {
    let isLocked = false;
    return function(...args) {
        if (!isLocked) {
            func.apply(this, args);
            isLocked = true;
            setTimeout(() => {
                isLocked = false;
            }, wait);
        }
    }
}

const throttle2 = (func, wait) => {
    let timeout = null;
    return function(...args) {
        if (!timeout) {
            timeout = setTimeout(() => {
                func.apply(this, args);
                timeout = null;
            }, wait);
        }
    }
}

function traverse(matrix) {
    const columnNum = matrix[0].length;
    console.log(columnNum);
    const upperBound = 0;
    const lowerBound = matrix.length-1;
    const result = [];
    let isUp = false;
    let row = 0;

    for (let i = 0; i < columnNum; i++) {
        if (!isUp) {
            if (row === lowerBound) {
                isUp = true;
                result.push(matrix[row][i]);
                row--;
            } else {
                result.push(matrix[row][i]);
                row++;
            }
        } else {
            if (row === upperBound) {
                isUp = false;
                result.push(matrix[row][i]);
                row++;
            } else {
                result.push(matrix[row][i]);
                row--;
            }
        }
    }

    return result.join("");
}

const matrix = [
    ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
    ['h', 'i', 'j', 'k', 'l', 'm', 'n'],
    ['o', 'p', 'q', 'r', 's', 't', 'u'],
];

// console.log(traverse(matrix));

function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

const rootA = new TreeNode("a");
const rootA21 = new TreeNode("a21");
const rootA22 = new TreeNode("a22");
const rootA31 = new TreeNode("a31");
rootA.left = rootA21;
rootA.right = rootA22;
rootA21.left = rootA31;

const rootB = new TreeNode("b");
const rootB21 = new TreeNode("b21");
const rootB22 = new TreeNode("b22");
const rootB31 = new TreeNode("b31");
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

// console.log(sameNode(rootA, rootB, "a21"));


/**
 * Create a DOMStore so that it has three methods: set, get, has.
The DOMStore should be able to store a DOM Node and return the value associated with the particular Node.
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
