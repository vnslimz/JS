console.log('Bai 0: ');
let bai0_n = 100;
let bai0_uoc = []
for (i = 2; i < bai0_n; i ++){
    if (bai0_n % i == 0){
        bai0_uoc.push(i);
    } else {
        continue
    }
}
if (bai0_uoc.length == 0){
    console.log(bai0_n,'la so nguyen to');
} else {
    console.log(bai0_n,'khong phai la so nguyen to');
}
console.log('\n');


console.log('Bai 2: ');
let bai1_soNguyento = []
let bai1_soChan = []
function timSonguyento(x){
    let bai1_uoc = []
    for (i = 2; i < x; i ++){
        if (x % i == 0){
            bai1_uoc.push(i);
        } else {
            continue
        }
    }
    if (bai1_uoc.length == 0){
        return true
    } else {
        return false
    }
}
function timSochan(x){
    if (x % 2 == 0){
        return true
    }
    else {
        return false
    }
}
let bai1_n = 100;
for (i = 1; i <= bai1_n; i ++){
    if (timSonguyento(i) == true){
        bai1_soNguyento.push(i)
    }
    if (timSochan(i) == true){
        bai1_soChan.push(i)
    }
}
console.log(bai1_soNguyento,'la cac so nguyen to tu 1 toi',bai1_n);
console.log(bai1_soChan,'la cac so chan tu 1 toi',bai1_n);
console.log('\n');


console.log('Bai 2: ');
function bangCuuChuong(x, y){
    let z = x * y
    console.log(`${x} x ${y} = ${z}`);
}
for (i = 1; i < 10; i ++){
    for (j = 1; j < 10; j ++){
        bangCuuChuong(i, j)
    } 
}
console.log('\n');


console.log('Bai 3: ');
let bai3_n = 123456789
let bai3_Str = bai3_n.toString()
let bai3_Ar = bai3_Str.split('')
let bai3_RevStr = bai3_Ar.reverse()
let bai3_Revn = 0
for (i = 0; i < bai3_RevStr.length; i ++){
    bai3_Revn += bai3_RevStr[i] * (10 ** (bai3_RevStr.length - 1 - i))
}
console.log(bai3_Revn);
console.log('\n');


console.log('Bai 4: ');
let fibonacci = []
let bai4_n = 10;
if (bai4_n == 1){
    fibonacci = [0]
} else if (bai4_n == 2){
    fibonacci = [0, 1]
} else {
    fibonacci = [0, 1];
    for (i = 2; i < bai4_n; i ++){
        let newValue = fibonacci[i-2] + fibonacci[i-1]
        fibonacci.push(newValue)
    }  
}
console.log(fibonacci);


console.log('Bai 5: ');
let bai5_n = 3;
let bai5_Tong = 0;
let bai5_tich = 1;
for (i = 1; i <= bai5_n; i++){
    bai5_Tong += i
    bai5_tich *= i
}
console.log(bai5_Tong);
console.log(bai5_tich);


console.log('Bai 6:');
for (i = 1; i <= 1000; i++){
    let bai6uocSo = []
    for (n = 1; n <= i; n++){
        if (i % n == 0){
            bai6uocSo.push(n)
        } else{
            continue
        }
    }
    let tongUocSo = 0;
    for (n = 0; n < bai6uocSo.length; n ++){
        tongUocSo += bai6uocSo[n]
    }
    if (tongUocSo == i * 2){
        console.log(i + ' la so hoan hao');
    }
}
console.log('\n');


console.log('Bai 7: ');
let bai7_n = 100
let bai7_sum = 0
for (i = 1; i <= bai7_n; i++){
    bai7_sum += 1/(i ** 3)
}
console.log(bai7_sum.toFixed(3));