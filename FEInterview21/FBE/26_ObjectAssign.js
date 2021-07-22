/**
 * @param {any} target
 * @param {any[]} sources
 * @return {object}
 *
 * 其实也不用这么复杂，就注意还有 symbol 就好
 *
 */
function objectAssign(target, ...sources) {
    if (target === null || target === undefined) {
        throw new Error('Not an object');
    }

    for (const source of sources) {
        if (source === null || source === undefined) {
            continue;
        }

        /**
         * The Object.defineProperties() method defines new or modifies existing properties directly on an object, returning the object.
         * const object1 = {};

            Object.defineProperties(object1, {
            property1: {
                value: 42,
                writable: true
            },
            property2: {}
            });

        */

        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        /**
         * The Object.getOwnPropertyDescriptors() method returns all own property descriptors of a given object.
         * const object1 = {
            property1: 42
            };

            const descriptors1 = Object.getOwnPropertyDescriptors(object1);

            console.log(descriptors1.property1.writable);
            // expected output: true
        */

        for (const symbol of Object.getOwnPropertySymbols(source)) {
            target[symbol] = source[symbol];
        }
    }
    return target;
}
