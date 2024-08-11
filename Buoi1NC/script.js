console.log('Bai 1: ');
let month = 2
let year = 2025
let namNhuan = true

let thang31 = [1, 3, 5, 7, 8, 10, 12]
let thang30 = [4, 6, 9, 11]

if (month > 12){
    console.log('Thang nay khong ton tai');
}

namNhuan = (year%4==0)?(year%100==0?((year%400==0?(true):(false))):(true)):(false)

if (month == 2){
    if (namNhuan == true){
        console.log('Thang '+month+' nam '+year+' co 29 ngay');
    }
    else{
        console.log('Thang '+month+' nam '+year+' co 28 ngay');
    }
}
else{
    if (thang31.includes(month)){
        console.log('Thang '+month+' nam '+year+' co 31 ngay');
    }
    else{
        console.log('Thang '+month+' nam '+year+' co 30 ngay');
    }
}
console.log('\n');


console.log('Bai 2: ');
let bai2_a = 10;
let bai2_b = 5;
let nghiem = -bai2_b/bai2_a
console.log('Nghiem cua phuong trinh: '+bai2_a+'x + '+bai2_b+' = 0 la '+nghiem);
console.log('\n');


console.log('Bai 3: ');
let bai3_a = 1;
let bai3_b = -4;
let bai3_c = 3;
let bai3_delta = (bai3_b)**2 - 4*(bai3_a)*(bai3_c)
let bai3_nghiem1 = (-bai3_b - (bai3_delta)**0.5)/(2*bai3_a);
let bai3_nghiem2 = (-bai3_b + (bai3_delta)**0.5)/(2*bai3_a)

if (bai3_delta < 0){
    console.log('Phuong trinh vo nghiem');
}
if (bai3_delta == 0){
    console.log('Phuong trinh co 1 nghiem la '+ bai3_nghiem1)
}
else{
    console.log('Phuong trinh co 2 nghiem la '+ bai3_nghiem1 + ' va '+ bai3_nghiem2);
}
console.log('\n');


console.log('Bai 4: ');
let sodien = 120;
let tiendien = 0
if (sodien > 300){
    tiendien = 375000 + (sodien - 300)*3000
}
else{
    if (sodien > 200){
        tiendien = 200000 + (sodien - 200)*1750
    }
    else{
        tiendien = sodien > 100 ? (75000 + (sodien - 100)*1250):(sodien * 750)
    }
}
console.log('Tien dien thang nay la '+tiendien);



console.log('Bai 5: ');
let x = 10
let F = ((x**2 + Math.E**(Math.abs(x)) + Math.sin(x)**2))/(x**3)
console.log('F('+x+') = '+ F);
console.log('\n');


console.log('Bai 6: ');
tien_truockm = 1000
tien_saukm = tien_truockm >= 300 ? (tien_truockm*0.7):(tien_truockm >= 200 ? (tien_truockm*0.8):(tien_truockm))
console.log(tien_saukm);
console.log('\n');


console.log('Bai 7: ');
let bai7_x = 0.2;
let bai7_n = 4;

if (Number.isInteger(bai7_n) == false){
    console.log('Nhap gia tri n kha dung');
}
else{
    if (bai7_n % 2 == 1){
        S = 0
    }
    else{
        S = 2020*bai7_x;
        for (i = 2; i <= bai7_n; i += 1){
            S += ((bai7_x ** i)/(3 ** (i - 1)))
        }
    }
}
console.log(S);
console.log('\n');


console.log('Bai 8: ');
let bai8_n = 2
let bai8_F1 = 0
let bai8_F2 = 0
let bai8_F3 = 0

for (i=1; i<=bai8_n; i++){
    bai8_F1 += i;
    bai8_F2 += i**i;
    bai8_F3 += 1/(2*i + 1);
}
console.log(bai8_F1);
console.log(bai8_F2);
console.log(bai8_F3);
console.log('\n');


console.log('Bai 9: ');
let thuNhap = 10000000
let thue = thuNhap >= 3000000 ? (thuNhap >= 6000000 ? (thuNhap >= 10000000 ? (thuNhap*0.25):(thuNhap*0.15)):(thuNhap*0.1)):(thuNhap*0.05);
let netThuNhap = thuNhap - thue
console.log(netThuNhap);
console.log('\n');


console.log('Bai 10: ');
let bai10_n = 100;
let uocsochan = [];
let tongUoc = 0
let uocsole = []
for (i = 1; i<=bai10_n; i++){
    if ((bai10_n % i == 0) && (i % 2 == 0)){
        uocsochan.push(i)
    }
    if ((bai10_n % i == 0) && (i % 2 == 1)){
        uocsole.push(i)
    }
    else {
        continue
    }
}
for (i = 0; i < uocsochan.length; i++){
    tongUoc += uocsochan[i]
}
console.log(tongUoc);
console.log(uocsole.length);
console.log('\n');


console.log('Bai 12: ');
let bai11_n = 100;
let uocNho = []
let tongUocNho = 0;
for (i = 1; i<bai10_n; i++){
    if (bai10_n % i == 0){
        uocNho.push(i)
    }
    else {
        continue
    }
}
for (i = 0; i < uocNho.length; i++){
    tongUocNho += uocNho[i]
}
console.log(tongUocNho);
console.log('\n');


console.log('Bai 13: ');
for (i = 1; i <= 1000; i++){
    let bai13uocSo = []
    for (n = 1; n <= i; n++){
        if (i % n == 0){
            bai13uocSo.push(n)
        } else{
            continue
        }
    }
    let tongUocSo = 0;
    for (n = 0; n < bai13uocSo.length; n ++){
        tongUocSo += bai13uocSo[n]
    }
    if (tongUocSo == i * 2){
        console.log(i + ' la so hoan hao');
    }
}
console.log('\n');


console.log('Bai 14: ');
let bai14_n = 199;
let bai14_text = bai14_n.toString();
let bai14_digit = bai14_text.split('')
let bai14_tich = 1
for ( i = 0; i < bai14_digit.length; i++){
    bai14_tich *= parseInt(bai14_digit[i])
}
console.log(bai14_tich);
console.log('\n');


console.log('Bai 15: ');
let bai15_n = 1999;
let bai15_text = bai15_n.toString();
let bai15_digit = bai15_text.split('')
let bai15_tich = 1
for ( i = 0; i < bai15_digit.length; i++){
    if (bai15_digit[i] % 2 == 1){
        bai15_tich *= parseInt(bai15_digit[i])
    }
}
console.log(bai15_tich);
console.log('\n');


console.log('Bai 16: ');
