let a = 'Dung';
let b = 19;
let c;
let tn = ['Toan', 'Ly', 'Hoa'];
let xh = ['Su', 'Dia',  'GDCD'];
let ten = 'Nguyen Xuan Dung'
let rand = 'awfawiofbawbaiowfb'

function checkBoolean(item){
    console.log(Boolean(item));
}

console.log('Bai 1:');
checkBoolean(a)
checkBoolean(b)
checkBoolean(c)

console.log('Bai 2:');
let thitotnghiep = [...tn, ...xh]
console.log(thitotnghiep);


console.log('Bai 3');
function sum(...args){
    let sum = 0
    for (let arg of args){
        sum += arg
    }
    return sum
}
console.log(sum(1, 2, 3));

console.log('Bai 4:');
const noSpaces = ten.replace(/\s/g, '');
let nameLetter = noSpaces.split('')
const count = nameLetter.reduce((pre, curr) => {
    if (!pre[curr]){
        pre[curr] = 1;
    } else {
        pre[curr]++;
    }
    return pre
}, {})
console.log(count);













