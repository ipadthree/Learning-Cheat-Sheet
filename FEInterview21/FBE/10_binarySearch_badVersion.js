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



function binarySearch(arr, target){
    // your code here
    if (arr.length === 0) return -1;
    let left = 0;
    let right = arr.length;
    while (left < right) {
      let middle = left + Math.floor((right-left)/2);
      if (target === arr[middle]) return middle;
      if (target < arr[middle]) {
        left = middle+1;
      } else {
        right = middle;
      }
    }
    return -1;
  }
