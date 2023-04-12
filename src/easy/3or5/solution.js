

const sum3Or5Multiples = (start, end) => {
    let sum = 0
    for (let i = start; i < end; i++) {
        if (i % 3 === 0 || i % 5 === 0) sum += i;
    }

    return sum
}


console.log(sum3Or5Multiples(0, 1000))