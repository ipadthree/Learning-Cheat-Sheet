setTimeout(func1, 10000);
setTimeout(func2, 10000);
setTimeout(func3, 10000);

// all 3 functions are scheduled 10 seconds later
clearAllTimeout();

/**
 * cancel all timer from window.setTimeout
 */
const originalSetTimeout = window.setTimeout;
let timeouts = [];

window.setTimeout = (func, delay) => {
    const id = originalSetTimeout(func, delay);
    timeouts.push(id);
    return id;
};

function clearAllTimeout() {
    // your code here
    timeouts.forEach((timeoutId) => clearTimeout(timeoutId));
    timeouts = [];
}
