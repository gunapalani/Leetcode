
let number = [3, 3];
let target = 6;


for (let i = 0; i <= number.length; i++) {
    for (let j = i + 1; j < number.length; j++) {
        if ((number[i] + number[j]) == target) {
            console.log([i, j]);
        }
    }
}