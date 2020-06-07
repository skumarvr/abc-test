const fetch = require("node-fetch");

function display(data) {
    console.log(data);
}

function printHello() {
    console.log('Hello');
}

function blockFor300ms() {
    var start = new Date();
    for(i=0;i<99999999;i++) {
        var j =i;
    }
    var end = new Date() - start;
    console.info('Execution time: %dms', end);
}

setTimeout(printHello, 0);
const futureData = fetch('https://twitter.com/will/tweets/1');
futureData.then(display);
blockFor300ms();
console.log('Me first!');
