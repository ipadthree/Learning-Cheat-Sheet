/**
 * 模版，左闭右开
 * [left, right)
*/
function binarySearch(left, right) {
    while (left < right) { // < 注意
        middle = left + (right - left) / 2;
        if (middle ===) return middle;
        if (middle 大了) {
            right = middle;
        } else {
            left = middle + 1 //[middle + 1, right)
        }
    }

    //最小的left让
    return left 或者not found
}
