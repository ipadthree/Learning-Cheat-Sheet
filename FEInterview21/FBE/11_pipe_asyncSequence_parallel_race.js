/**
 * pipe([
  times(2),
  times(3)
])
// x * 2 * 3
*/

function pipe(funcs) {
    // your code here
    return function (arg) {
        let result = funcs.reduce((accumulator, func) => {
            return func(accumulator);
        }, arg);
        return result;
    };
}

//---------------------------------------------------------------//

/*
type Callback = (error: Error, data: any) => void

type AsyncFunc = (
   callback: Callback,
   data: any
) => void

*/

/**
 * @param {AsyncFunc[]} funcs
 * @return {(callback: Callback) => void}
 */
function promisify(asyncFunc) {
    return function (arg) {
        return new Promise((resolve, reject) => {
            asyncFunc((error, data) => {
                if (error) {
                    reject(error);
                }
                resolve(data);
                // if (data) {
                //     resolve(data);
                // }
                // 不能这个 if data check，要不然没有data就没法resolve了。
                //  但是可以，这样else里面就一定执行
                /**
                 * if (err) {
                    reject(err)
                    } else {
                    resolve(data)
                    }
                */
            }, arg);
        });
    };
}

function sequence(funcs) {
    // your code here
    const promisifiedFuncs = funcs.map(promisify);
    return function (callback, data) {
        let initPromise = Promise.resolve(data);

        promisifiedFuncs.forEach((promisifiedFunc) => {
            initPromise = initPromise.then(promisifiedFunc);
        });

        initPromise.then((data) => callback(undefined, data)).catch(callback);
    };
}

//---------------------------Parallel，类似 Promise.all------------------------------------//

function promisify(asyncFunc) {
    return function (arg) {
        return new Promise((resolve, reject) => {
            asyncFunc((error, data) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(data);
                }
            }, arg);
        });
    };
}

/**
 * 先Promisify,和上面👆一样
 * @param {AsyncFunc[]} funcs
 * @return {(callback: Callback) => void}
 */
function parallel(funcs) {
    funcs = funcs.map((func) => promisify(func));
    return function (callback, data) {
        let count = 0;
        let hasError = false;
        const result = [];
        funcs.forEach((func, index) => {
            func(data)
                .then((response) => {
                    result[index] = response;
                    count++;
                    if (count === funcs.length) {
                        callback(undefined, result);
                    }
                })
                .catch((error) => {
                    if (!hasError) {
                        callback(error, undefined);
                        hasError = true;
                    }
                });
        });
    };
}

//---------------------------race Promise.race------------------------------------//

function race(funcs) {
    // your code here
    funcs = funcs.map((func) => promisify(func));

    return function (callback, data) {
        let hasOneDone = false;
        funcs.forEach((func) => {
            func(data)
                .then((response) => {
                    if (!hasOneDone) {
                        hasOneDone = true;
                        callback(undefined, response);
                    }
                })
                .catch((error) => {
                    if (!hasOneDone) {
                        callback(error, undefined);
                        hasOneDone = true;
                    }
                });
        });
    };
}
