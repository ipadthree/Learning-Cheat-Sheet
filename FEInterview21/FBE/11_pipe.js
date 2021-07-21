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
