/*
Suppose we have a Callback type

type Callback = (error: Error, result: any | Thunk) => void
A Thunk is a function that take a Callback as parameter

type Thunk = (callback: Callback) => void
Like following three thunks

const func1 = (cb) => {
  setTimeout(() => cb(null, 'ok'), 10)
}

const func2 = (cb) => {
  setTimeout(() => cb(null, func1), 10)
}

const func3 = (cb) => {
  setTimeout(() => cb(null, func2), 10)
}
in above example, three functions are kind of chained up, func3 → func2 → func1, but it don't work without some glue.

OK, now you are asked to implement a flattenThunk() which glue them up and returns a new thunk.

flattenThunk(func3)((error, data) => {
   console.log(data) // 'ok'
})
*/

/**
 * @param {Thunk} thunk
 * @return {Thunk}
 */
function flattenThunk(thunk) {
    // your code here
    return (finalCallback) => {
        const cb = (error, val) => {
            if (typeof val === 'function') {
                val(cb);
            } else {
                finalCallback(error, val);
            }
        };
        thunk(cb);
    };
}
