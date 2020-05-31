/**
 * g -  stands for a global search which means that after finding the first match,
 * it will not start over from the beginning but continue searching from the end of the previous match.
 * i - stands for case insensitive search which makes the whole expression case-insensitive.
 * @param {*} text
 */

function vowelsCounter(text) {
    let matchingInstances = text.match(/[aeiou]/gi);

    return matchingInstances.length;
}

console.log(vowelsCounter('anehizxcv'));
