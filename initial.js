/**
 * Created by florin.nichifiriuc on 10/23/2015.
 */

// result is a large amount of data to be processed

var i = 0,
    resultLenght = result.length,
    convert2Text = function (item) {
        return item.text;
    },
    html = "";

for (; i < resultLenght; i++) {
    html += "<li>" + convert2Text(result[i]) + "<li>";
}

// append html to dom