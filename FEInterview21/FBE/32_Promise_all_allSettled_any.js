/**
 * The Promise.all() method takes an iterable of promises as an input,
 * and returns a single Promise that resolves to an array of the results of the input promises
 */
/**
 * @param {Array<any>} promises - notice input might have non-Promises
 * @return {Promise<any[]>}
 */
function all(promises) {
    // your code here
    return new Promise((resolve, reject) => {
        let count = 0;
        const result = [];
        if (promises.length === 0) resolve(result);

        promises.forEach((promise, index) => {
            Promise.resolve(promise).then(
                (value) => {
                    result[index] = value;
                    count++;
                    if (count === promises.length) {
                        //等着都集齐
                        resolve(result);
                    }
                },
                (error) => reject(error)
            );
        });
    });
}

// 超级fancy的方法
async function all(promises) {
    const results = [];

    for (let promise of promises) {
        results.push(await promise);
    }

    return results;
}

//---------------------------------allSettled()----------------------------------------//
/**
 * @param {Array<any>} promises - notice that input might contains non-promises
 * @return {Promise<Array<{status: 'fulfilled', value: any} | {status: 'rejected', reason: any}>>}
 */
function allSettled(promises) {
    return new Promise((resolve, reject) => {
        let count = 0;
        const result = new Array(promises.length).fill(null);
        if (promises.length === 0) resolve(result);
        promises.forEach((promise, index) => {
            Promise.resolve(promise)
                .then(
                    (value) => {
                        result[index] = { status: 'fulfilled', value };
                    },
                    (error) => {
                        // 有error 先不trigger reject，存下来
                        result[index] = { status: 'rejected', reason: error };
                    }
                )
                .finally(() => {
                    count++;
                    if (count === promises.length) {
                        resolve(result);
                    }
                });
        });
    });
}

//---------------------------------Promise.any()----------------------------------------//

/**
 * @param {Array<Promise>} promises
 * @return {Promise}
 */
function any(promises) {
    return new Promise((resolve, reject) => {
        const errors = [];
        let errorCounts = 0;

        promises.forEach((promise, index) => {
            promise.then(resolve).catch((error) => {
                //fulfill了直接resolve，
                // error了存下来，
                errors[index] = error;
                errorCounts++;
                //没有一个成功就把error一起返回。
                if (errorCounts === promises.length) {
                    reject(new AggregateError('No Promise in Promise.any was resolved', errors));
                }
            });
        });
    });
}

//---------------------------------Promise.race()----------------------------------------//
// 和 11_pipe_asyncSequence_parallel_race 的 race基本一样。

function race(promises) {
    // your code here
    return new Promise((resolve, reject) => {
        let hasOneDone = false;
        promises.forEach((promise, index) => {
            promise
                .then((value) => {
                    if (!hasOneDone) {
                        hasOneDone = true;
                        resolve(value);
                    }
                })
                .catch((error) => {
                    if (!hasOneDone) {
                        hasOneDone = true;
                        reject(error);
                    }
                });
        });
    });
}
