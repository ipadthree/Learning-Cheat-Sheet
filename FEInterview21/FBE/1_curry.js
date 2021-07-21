/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */
function curry(fn) {
    // your code here
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        } else {
            return function (...newArgs) {
                return curried.call(this, ...args, ...newArgs);
            };
        }
    };
}

/**
 * const  join = (a, b, c) => {
   return `${a}_${b}_${c}`
}

const curriedJoin = curry(join)
const _ = curry.placeholder

curriedJoin(1, 2, 3) // '1_2_3'

curriedJoin(_, 2)(1, 3) // '1_2_3'

curriedJoin(_, _, _)(1)(_, 3)(2) // '1_2_3'
 * @param { Function } func
 */
function curryWithPlaceholder(func) {
    return function curried(...args) {
        const complete =
            args.length >= func.length &&
            !args.slice(0, func.length).includes(curryWithPlaceholder.placeholder);
        if (complete) return func.apply(this, args);
        return function (...newArgs) {
            // replace placeholders in args with values from newArgs
            const res = args.map((arg) =>
                arg === curryWithPlaceholder.placeholder && newArgs.length ? newArgs.shift() : arg
            );
            return curried(...res, ...newArgs);
        };
    };
}

curryWithPlaceholder.placeholder = Symbol();
