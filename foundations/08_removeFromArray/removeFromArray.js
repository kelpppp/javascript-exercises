const removeFromArray = function(arr, ...args) {

    let newArr = [];

    arr.forEach((item) => {
        if(!args.includes(item)) {
            newArr.push(item);
        }
    });

    return newArr;
    
}

// Do not edit below this line
module.exports = removeFromArray;
