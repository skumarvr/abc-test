let add5 = new Function('a', 'return a+5');
let multiply4 = new Function('a', 'return a*4');
let divide2 = new Function('a', 'return a/2');

function addAll(fnArr) {
    let sum = 0
    for( let fn of fnArr) {
        sum += fn;
    }
    return sum;
}

console.log(addAll([add5(1), multiply4(2), divide2(3)]));