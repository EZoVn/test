let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function calculeSum(array) {
    let sum = 0;
    array.forEach((element) => {
        sum += element;
        console.log(sum);
    });
    return sum;
}
console.log(calculeSum(array));
