function quickSort(arr, left = 0, right = arr.length - 1) {
    // your code here
    if (left > right) return;
    const pivot = partition(arr, left, right);
    quickSort(arr, left, pivot - 1);
    quickSort(arr, pivot + 1, right);
}

function partition(arr, left, right) {
    const pivotIndex = Math.floor(Math.random() * (right - left)) + left;
    let pivot = arr[pivotIndex];
    while (left <= right) {
        if (arr[left] <= pivot) {
            left++;
        } else {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            right--;
        }
    }
    console.log(pivotIndex, right);
    [arr[pivotIndex], arr[right]] = [arr[right], arr[pivotIndex]];
    return right;
}

let a = [3,1,2,5,4];
quickSort(a)
console.log(a);
