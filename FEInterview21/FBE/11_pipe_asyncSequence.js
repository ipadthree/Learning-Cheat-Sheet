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
                // if (data) {
                //     resolve(data);
                // }
                // 不能这个 if data check，要不然没有data就没法resolve了。
                resolve(data);
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
