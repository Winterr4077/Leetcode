function createCounter(n) {
    return function() {
        return n++;
    }
}

console.log(createCounter());
