
function kthLargestElement (arr, k) {
    if (k > arr.length) return 'k should be smaller that array length';

    return arr.sort((a,b) => b - a)[k - 1];
}
console.log(kthLargest([3, 5, 2, 4, 6, 8], 3))