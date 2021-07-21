function cloneDeep(data, map = new Map()) {
    // your code here
    if (typeof data !== 'object' || data === null) {
        return data;
    }

    //使用map解决循环引用带来的无限递归
    //以要克隆的data作为键 clone作为值
    //在递归过程中若遇到重复的data(引用值)
    //则为循环引用,返回之前在map中储存的clone
    if (map.has(data)) {
        return map.get(data);
    }

    const clone = Array.isArray(data) ? [] : {};

    map.set(data, clone);

    const keys = [...Object.getOwnPropertySymbols(data), ...Object.keys(data)];

    for (let key of keys) {
        clone[key] = cloneDeep(data[key], map);
    }
    return clone;
}
