function join(arr, concatStr) {
    var returnStr = '';
    for (var i = 1; i <= arr.length; i++) {
        returnStr = returnStr + arr[i - 1].toString();
        if (i !== arr.length) {
            returnStr = returnStr + concatStr.toString();
        }
    }
    return returnStr;
}

function repeat(str, times) {
    var returnStr = '';
    for (i = 0; i < times; i++) {
        returnStr = returnStr + str;
    }
    return returnStr;
}

console.log(join([1, 2, 3], ''));
console.log(repeat('yoyo', 5));
