let id = setTimeout(callback, delay);
clearTimeout(id);

setTimeout(callback, delay);
setTimeout(callback, delay);
setTimeout(callback, delay);

/**
 * cancel all timer from window.setTimeout
 */

const originalSetTimeout = window.setTimeout;
let timeouts = [];

window.setTimeout = (func, delay) => {
  const id = originalSetTimeout(func, delay);
  timeouts.push(id);
  return id;
}

function clearAllTimeout() {
  // your code here
  timeouts.forEach(timeoutId => clearTimeout(timeoutId));
  timeouts = []
}
