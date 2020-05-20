

function sorNums (arr) {
    let one = 0,
        two = 0,
        three = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) one++;
        if (arr[i] === 2) two++;
        if (arr[i] === 3) three++;
    }

    return [...Array(one).fill(1), ...Array(two).fill(2), ...Array(three).fill(3),]
}

console.log(sorNums([3, 3, 2, 1, 3, 2, 1]));
