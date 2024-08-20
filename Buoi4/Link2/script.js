const arr1 = [
    { name: 'name1', age: 12 },
    { name: 'name2', age: 20 },
    { name: 'name3', age: 15 },
    { name: 'name4', age: 10 },
    { name: 'name4', age: 27 }
]

console.log('Bai 1:');
const sortArr1 = arr1.sort(function(a, b){return a.age - b.age})
console.log(sortArr1);

console.log('Bai 2:');
const NameSortArr1 = sortArr1.reduce((pre, curr) => {
    pre.push(curr.name)
    return pre 
}, [])
console.log(NameSortArr1);

console.log('Bai 3:');
const allZero = []
for (i = 0; i<100; i++){
    allZero.push(0)
}
const ZeroTo99 = allZero.map(function(item, index){return index})
console.log(ZeroTo99);

const ChiaDu5 = ZeroTo99.filter(function(item){return (item % 5 != 0)})
console.log(ChiaDu5);

const TongChiaDu5 = ChiaDu5.reduce((pre, curr) => {
    pre += curr
    return pre
})
console.log(TongChiaDu5);

console.log('Bai 4:');
const Arr2 = [
    { name: 'name1', count: 13 },
    { name: 'name3', count: 23 },
    { name: 'name1', count: 25 },
    { name: 'name2', count: 27 },
    { name: 'name3', count: 30 },
    { name: 'name2', count: 20 }
]
const groupArr2 = Arr2.reduce((pre, curr) => {
    if (!pre[curr.name]){
        pre[curr.name] = { name: curr.name, count: curr.count}
    } else {
        pre[curr.name].count += curr.count
    }
    return pre
}, [])
console.log(groupArr2);
  


