/**
 * Created by florin.nichifiriuc on 10/23/2015.
 */

// result is a large amount of data to be processed

var html = "",
    buffer = function (items, fnIterate, fnCallback) {
        var i = 0, len = items.length;
        setTimeout(function () {
            var result,
            // save initial time
                start = Date.now();
            // check that i didn't reach the end
            // check that the function didn't returned false in order to stop the iteration
            // check that the iteration didn't take more then 50 ms
            for (; i < len && result !== false && (Date.now() - start) < 50; i++) {
                result = fnIterate.call(items[i], items[i], i);
            }
            // if we didn't reach the end or we didn't stop
            // wait for 20 ms and run again the same function
            if (i < len && result !== false) {
                setTimeout(arguments.callee, 20);
            }
            else {
                fnCallback(items);
            }
        }, 20);
    };

buffer(result , function (item) {
        html += "<li>" + convert2Text(item) + "<li>";
    }, function () {
        //append html to the dom
    }
);
