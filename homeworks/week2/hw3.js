function reverse(str) {
    var returnStr = '';
    var strTemp = str.split('');
    for (var i = str.length; i > 0; i--) {
        returnStr = returnStr + strTemp[i - 1];
    }
    console.log(returnStr);
}

reverse('hello');
