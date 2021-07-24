//Can you create a range(from, to) which makes following work?

//for (let num of range(1, 4)) {
//  console.log(num)
//}
// 1
// 2
// 3
// 4

/**
 * @param {integer} from
 * @param {integer} to
 */
function range(from, to) {
    // your code here
    return {
        [Symbol.iterator]: function () {
            return {
                from,
                to,
                next() {
                    if (this.from <= this.to) {
                        return {
                            done: false,
                            value: this.from++,
                        };
                    } else {
                        return {
                            done: true,
                        };
                    }
                },
            };
        },
    };
}
