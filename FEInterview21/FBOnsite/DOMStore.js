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

    has(node) {
        // return !!node[this.domStoreIdentifier];
        return Object.getOwnPropertySymbols(node).includes(this.domStoreIdentifier);
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
        // return !!this.get(node); //应该是不好的，要考虑null undefined, 0的情况
        return this.keys.includes(node);
    }
}

/**
 * 但面試官說不許用 我想一想就用NodeList概念寫 但是這樣的結果是O(n) for get, set, has...

然後問怎麼optimize 我說可以用ES6 Map() 或用一個hashing function去output 成一個string然後存在普通的javascript object {}裡

然後再問假如有兩個不同的<div>abc</div> DOMStore要怎麼分辨他們:
<div>
  <div>abc</div>
  <div>abc</div>
</div>
*/

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
