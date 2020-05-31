function maxRecurringChar(text) {
    let charMap = {};
    let charsArr = [];
    let valusArr = [];
    let maxCharValue = 0;

    for(let char of text) {
        charMap.hasOwnProperty(char) ? charMap[char]++ : charMap[char] = 1;
    }

    charsArr = Object.keys(charMap);
    valusArr = Object.values(charMap);
    maxCharValue = Math.max(...valusArr);

    return charsArr[valusArr.indexOf(maxCharValue)]
}

console.log(maxRecurringChar('sfsfsafaaas'));
