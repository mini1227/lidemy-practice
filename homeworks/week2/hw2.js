function capitalize(str) {
    var strArray = str.split('');
    var returnStr = '';
    for (var i = 0; i < str.length; i++) {
        if (i === 0) {
            returnStr = returnStr + strArray[i].toUpperCase();
        } else {
            returnStr = returnStr + strArray[i];
        }
    }
    return returnStr;
}

console.log(capitalize('hello'));
