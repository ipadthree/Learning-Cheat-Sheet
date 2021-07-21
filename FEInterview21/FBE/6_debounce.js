function debounce(func, duration) {
    let timeout = null;
    return function (...args) {
        clearTimeout(timeout);

        timeout = setTimeout(() => {
            func.apply(this, args);
        }, duration);
    };
}

function debounceWithTrailing(func, wait, option = { leading: false, trailing: true }) {
    let lock = null;
    // lastArgs这里也是用于indicate有没有在lock中有这个function被
    // invoke过。
    let lastArgs = null;
    return function (...args) {
        if (option.leading && !lock) {
            func.apply(this, args);
        } else {
            lastArgs = args;
        }
        clearTimeout(lock);
        lock = setTimeout(() => {
            if (option.trailing && lastArgs) {
                func.apply(this, args);
            }
            lastArgs = null;
            lock = null;
        }, wait);
    };
}
