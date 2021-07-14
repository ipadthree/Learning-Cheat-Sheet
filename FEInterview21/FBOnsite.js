/**
 * Implement clearAllTimeout

let id = setTimeout(callback, delay);
clearTimeout(id);

setTimeout(callback, delay);
setTimeout(callback, delay);
setTimeout(callback, delay);
// implement clearAllTimeout();
*/

/**
 * cancel all timer from window.setTimeout
 */
const originalSetTimeout = window.setTimeout;
let timeouts = [];

window.setTimeout = (func, delay) => {
    const id = originalSetTimeout(func, delay);
    timeouts.push(id);
    return id;  //这个需要，还得满足setTimeout返回id
};

function clearAllTimeout() {
    // your code here
    timeouts.forEach((timeoutId) => clearTimeout(timeoutId));
    timeouts = [];
}

//------------------------------------------------------------------------------------------//
