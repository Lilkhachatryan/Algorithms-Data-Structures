const maxSumSubArray = (arr = []) => {
    let len = arr.length;
    let global_max = arr[0];
    let local_max = arr[0];

    for(let i = 0; i < len; i++) {
        local_max = Math.max(arr[i], arr[i] + local_max);
        global_max = Math.max(global_max, local_max);
    }
    return global_max;
}