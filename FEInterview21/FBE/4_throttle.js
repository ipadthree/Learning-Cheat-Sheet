function throttleLastArgs(func, wait) {
    // 这个版本是对BFE对的，lock 和 lastARgs都要在 closure里，不能在function中。
    let lock = false;
    let lastArgs;
    return function (...args) {
        if (!lock) {
            func.apply(null, args);
            lock = true;
            setTimeout(() => {
                lock = false;
                // 这里是如果lock的时候有function invoke，那就保存arg在unlock时候直接执行。
                if (lastArgs) {
                    func.apply(null, lastArgs);
                    lastArgs = null;
                }
            }, wait);
        } else {
            lastArgs = args;
        }
    };
}

function throttle(func, duration) {
    let lock = false;

    return function (...args) {
        if (!lock) {
            func.apply(this, args);
            lock = true;
            /**
             * 这里不能用arrow function，要不然this就乱了
             */
            setTimeout(function () {
                lock = false;
            }, duration);
        }
    };
}
