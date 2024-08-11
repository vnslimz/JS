let number = [19,9,20,5]
let administration = ['Oral', 'IV', 'Sublingual', 'Oral']

console.log('Bai 1:');
number.forEach(function(item){console.log(item);
})

console.log('Bai 2:');
const binhPhuong = number.map(function(item){return item ** 2})
console.log(binhPhuong);

console.log('Bai 3:');
const soLe = number.filter(function(item){return (item % 2 == 1)})
console.log(soLe);

console.log('Bai 4:');
const checksoDuongAll = number.every(function(item){return item > 0});
console.log(checksoDuongAll);

console.log('Bai 5:');
const checksoAm = number.some(function(item){return item < 0});
console.log(checksoAm);

console.log('Bai 6:');
const firstOralPosition = administration.indexOf('Oral')
console.log(firstOralPosition);

console.log('Bai 7:');
const lastOralPosition = administration.lastIndexOf('Oral')
console.log(lastOralPosition);

console.log('Bai 8:');
const detectLonHon10 = number.find(function(item){return item > 10})
console.log(detectLonHon10);

console.log('Bai 8:');
const checksoNam = number.includes(function(item){return item === 5})
console.log(checksoNam);

console.log('Bai 9:');
const sum = number.reduce(function(result, item){
    return result + item
})
console.log(sum);

