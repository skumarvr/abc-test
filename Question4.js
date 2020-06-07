Number.prototype[Symbol.iterator] = function* () {
    const num = this;
    if( num < 0) { 
        // if number is -ve yeild 0
        yield 0;
    }
    else {
        // +ve number
        for (let i = 0; i <= num; i++) {
            yield i;
        }
    }
};

console.log(...8);
console.log(...0);
console.log(...-8); 