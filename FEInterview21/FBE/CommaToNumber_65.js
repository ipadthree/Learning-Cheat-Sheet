/**
 * @param {number} num
 * @return {string}
 */
function addComma(num) {
    // your code here
    let result = [];
    const numString = '' + num;
    const numList = numString.split('.');
    if (numList.length > 1) {
        result.push('.', numList[1]);
    }
    console.log(result);
    const numArray = numList[0].split('');
    let three = 0;
    while (numArray.length > 3) {
        if (three < 3) {
            result.unshift(numArray.pop());
            three++;
        } else {
            three = 0;
            result.unshift(",");
        }
    }
    return result.length === 0 ? numArray.join('') : numArray.join('') + ',' + result.join("");
}

console.log(addComma(-.1234));
