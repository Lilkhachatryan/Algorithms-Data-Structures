function shortestPossiblePath(path) {
    let pathArr = path.split('/');
    pathArr = pathArr.filter(i => i !== '.');
    let newArr = [...pathArr];
    for (let i = 0; i < pathArr.length; i++) {
        if (pathArr[i] === '..') {
            let diff = pathArr.length - newArr.length;
            newArr.splice(i - 1 - diff, 2)
        }
    }
    return newArr.join('/');
}

console.log(shortestPossiblePath('/Users/Joma/Documents/../Desktop/./..'));
