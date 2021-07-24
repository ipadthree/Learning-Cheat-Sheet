/**
 * _.once(func) is used to force a function to be called only once,
 * later calls only returns the result of first call.
 */
/**
 * @param {Function} func
 * @return {Function}
 */
function once(func) {
    // your code here
    let value = null;
    let once = false;
    return function (...args) {
        if (!once) {
            value = func.apply(this, args);
            once = true;
            return value;
        } else {
            return value;
        }
    };
}
