let string1 = 'inTraVenous aDminisTraion'
let string2 = 'Hello     world  Xuan Dung   123   2005 '
let string3 = 'Nguyen Xuan Dung'

console.log('Bai 1: ');
let string1_ar = string1.split('')
let string1_revAr = string1_ar.reverse()
console.log(string1_revAr.toString().replace(/,/g ,''));

console.log('Bai 2: ');
let bai2_letter = 'a'
let new_string1 = string1
for (i = 0; i < string1.length; i++){
    new_string1 = new_string1.replace(bai2_letter, '')    
}
let bai2_check = string1.length - new_string1.length
console.log(`Chữ ${bai2_letter} xuất hiện trong chuỗi ${bai2_check} lần`);



console.log('Bai 3: ');
let stringLow = string1.toLowerCase()
let bai3_string1_sep = stringLow.split(' ')
let iv = bai3_string1_sep[0]
let adm = bai3_string1_sep[1]
iv = iv.replace(iv[0], iv[0].toUpperCase())
adm = adm.replace(adm[0], adm[0].toUpperCase())
console.log(iv.concat(' ', adm));
console.log('\n');

console.log('Bai 4: ');
let bai4_string2 = string2.replace(/\s+/g, ' ').trim()
console.log(bai4_string2);



console.log('Bai 6: ');
let bai6_letter = ' '
let bai6_string2 = bai4_string2
for (i = 0; i < string1.length; i++){
    bai6_string2 = bai6_string2.replace(bai6_letter, '')    
}
let bai6_check = bai4_string2.length - bai6_string2.length
console.log(`Co ${bai6_check + 1} tu trong van ban`);

console.log('Bai 7: ');
let ba7_string = string1_revAr.toString().replace(/,/g ,'');
if ( ba7_string == string1 ){
    console.log(true);
} else {
    console.log(false);
}



console.log('Bai 8: ');
let bai8_string = (iv.concat(' ', adm));
let bai8_newString = bai8_string.replace('Intravenous', 'Oral')
console.log(bai8_newString);


console.log('Bai 9: ');
function tachten(hovaten){
    let listHoTen = hovaten.split(' ')
    let ho = listHoTen[0]
    let ten = listHoTen[listHoTen.length - 1]
    console.log('Họ: '+ ho);
    console.log('Tên: '+ten);
}
tachten(string3)