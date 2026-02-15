
let number = [2, 7, 11, 15];
let target = 9;


for (let i = 0; i <= number.length; i++) {
    for (let j = i + 1; j < number.length; j++) {
        if ((number[i] + number[j]) == target) {
            console.log([i, j]);
        }
    }
}