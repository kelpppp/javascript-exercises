const palindromes = function (str) {
    const noPunc = str
        .split("")
        .filter(letter => (letter.toLowerCase() !== letter.toUpperCase()) || (/\d/.test(letter)))
        .join("");
    const reversed = noPunc.split("").reverse().join("");
    
    return reversed.toLowerCase() === noPunc.toLowerCase();

    // or just use filter((letter) => alphanumerical.includes(letter)) !!!
};

// Do not edit below this line
module.exports = palindromes;


