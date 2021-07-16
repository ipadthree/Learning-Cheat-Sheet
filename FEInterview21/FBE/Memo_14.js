/**
 * 14 Memo
 */

function memo(func, resolver) {
    // your code here
    const map = new Map();
    return function (...args) {
        let cachedKey = Array.from(args).join('_');
        if (!!resolver) {
            cachedKey = resolver.apply(this, args);
        }
        const cachedResult = map.get(cachedKey);

        if (!cachedResult) {
            let result = func.apply(this, args);
            map.set(cachedKey, result)
            return result;
        }
        return cachedResult;
    };
}

let callCount = 0;
const func = (a, b) => {
    callCount += 1;
    return a + b;
};
const memoed = memo(func);

memoed(1, 2);
console.log(callCount) //1
memoed(1, 2);
console.log(callCount) //1
memoed(1, 3);
console.log(callCount) //2
