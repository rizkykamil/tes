let numbers = {
    a: 2,
    b: 4
};
function result(numbers) {
    let {
        a,
        b
    } = numbers;
    numbers.a = b;
    numbers.b = a;
    return numbers;
}

console.log(result(numbers));