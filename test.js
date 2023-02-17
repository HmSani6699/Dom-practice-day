


function countdown(n) {
    if (n < 1) {
        return []
    }
    else {
        console.log(n)
        const array = countdown(n - 1);
        array.unshift(n);
        return array
    }
}

// console.log(countdown(10))




function result(b) {
    let newArray = []
    if (b <= 0) {
        return newArray
    }
    else {
        newArray.push(b)
        return countdown(b - 1)
    }
}

// console.log(result(11))



function countdown(n) {

    if (n == 0) {
        // stop the function at 0 so it will not be included in the array
        return [];
    }

    // concat the value of n as an array with the value less than it
    return [n].concat(countdown(n - 1))
}

// console.log(countdown(10))




function countdown(n) {
    if (n < 1) {
        return [];
    } else {
        // console.log(n, "before calling");
        const arr = countdown(n - 1);
        arr.unshift(n)
        // console.log(n, "after calling");
        return arr;
    }
}
console.log(countdown(5));