const num1 = prompt('first num');

const num2 = prompt('second num');

const num3 = prompt('third num');

const sum = [+num1, +num2, +num3]

const total = sum.reduce ((num, currentNum) => num + currentNum, 0) / sum.length;

const show = alert(total)



// const num1 = prompt('first num');

// const num2 = prompt('second num');

// const num3 = prompt('third num');

// const all = [+num1, +num2, +num3];

// const sum = (+num1 + +num2 + +num3)

// const total = sum / all.length;

// const show = alert(total)



