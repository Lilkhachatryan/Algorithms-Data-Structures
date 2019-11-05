function findMaxSum (matrix)
{
    var maxSum=0;
 	var numCols = matrix[0].length;
	var numRows = matrix[0].length;

    for (let left = 0; left < numCols; left++)
    {
        var temp= new Array(numRows).fill(0);;
 
        for (let right = left; right < numCols; right++)
        {
            // Find sum of every mini-row between left and right columns and save it into temp[]
            for (let i = 0; i < numRows; i++) {
                temp[i] += matrix[i][right];
            }
 
            // Find the maximum sum subarray in temp[].

            var sum = maxSumSubArray(temp, numRows);
 
            if (sum > maxSum)
                maxSum = sum;
        }
    }
 
    return maxSum;
}

function maxSumSubArray (arr = []) {
    let len = arr.length;
    let global_max = arr[0];
    let local_max = arr[0];

    for(let i = 0; i < len; i++) {
        local_max = Math.max(arr[i], arr[i] + local_max);
        global_max = Math.max(global_max, local_max);
    }
    return global_max;
}

findMaxSum([ 
   [0, -2, -7, 0],
   [9, 2, -6, 2],
   [-4, 1, -4, 1],
   [-1, 8, 0, -2 ]]) // 15