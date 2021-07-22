class NodeStore {
    constructor() {
        this.id = Symbol();
    }

    set(node, value) {
        node[this.id] = value;
    }
    get(node) {
        return node[this.id];
    }

    has(node) {
        return !!node[this.id];
    }
}
