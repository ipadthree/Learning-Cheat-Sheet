/**
 * @param {object} obj
 * @param {string} methodName
 */
function spyOn(obj, methodName) {
    // your code here
    const calls = [];
    const originalFunc = obj[methodName];

    if (typeof originalFunc !== 'function') {
        throw new Error('not a function!');
    }

    obj[methodName] = function (...args) {
        calls.push(args);
        return originalFunc.apply(this, args);
    };

    return {
        calls,
    };
}
