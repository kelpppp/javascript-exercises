const fibonacci = function(num) {
    let number;
    if (typeof num !== 'number') {
        number = parseInt(num);
    } else {
        number = num;
    }

    if (number === 1) {return 1;}
    if (number === 0) {return 0;}
    if (number < 0) {return "OOPS"};
    return fibonacci(number-1) + fibonacci(number-2);
};

// checks argument's type and makes sure we use 
// a number throughout rest of function.
// let count
// if (typeof countArg !== 'number') {
//     count = parseInt(countArg)
// } else {
//     count = countArg
// }

// const fib = [0, 1];
// for (let i = 2; i <= count; i++) {
//    fib[i] = fib[i - 1] + fib[i - 2];
// }
// return fib[count];

// Do not edit below this line
module.exports = fibonacci;
