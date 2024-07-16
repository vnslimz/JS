console.log('Bai 1: ');
let width = 10
let length = 15
P_rec = ( width + length ) * 2
S_rec = width * length
console.log('Chu Vi Hinh Chu Nhat la ' + P_rec);
console.log('Dien Tich Hinh Chu Nhat la ' + S_rec);
console.log('\n');

console.log('Bai 2: ');
let radius = 5
P_circ = radius * 2 * 3.14159
S_circ = ( radius ** 2 ) * 3.14159
console.log('Chu Vi Hinh Tron la ' + P_circ);
console.log('Dien Tich Hinh Tron la ' + S_circ);
console.log('\n');

console.log('Bai 3: ');
let so_dien = 1000
tien_dien = so_dien * 1500
console.log('Tien Dien thang nay co gia la ' + tien_dien + 'VND');
console.log('\n');

console.log('Bai 4: ');
let height = 1.78
let weight = 80
BMI = weight / (height ** 2)
console.log('BMI: ' + BMI);
console.log('\n');

console.log('Bai 5: ');
let day_lon = 20
let day_nho = 10
let height_thang = 10
S_thang = (day_lon + day_nho) * height_thang / 2
console.log('Dien Tich Hinh Thang la ' + S_thang);
console.log('\n');

console.log('Bai 6: ');
let a = 1909
let ChanLe = a%2 == 0 ? 'Chan' : 'Le'
console.log(a + ' la so ' + ChanLe);
console.log('\n');

console.log('Bai 7: ');
let x = 10
let y = 5
let z = 15
let t = x > y ? (x > z ? x : z):(y > z ? y : z)
console.log(t + ' la so lon nhat');
console.log('\n');

console.log('Bai 8: ');
let m = 2**0.5
let n = 2**0.5
let p = 2
if ((m + n < p) || (n + p < m) || (p + m < n)){
    console.log('Khong the tao thanh tam giac');
}
else{
    if ((m == n) && (m == p)){
        console.log(('Tao thanh tam giac deu'));
    }
    else{
        if ( (m==n) || (n==p) || (p==m)){
            if ((p == m**0.5) || (m == p**0.5) || (n == m**0.5)){
                console.log('Tao thanh tam giac vuong can');
            }
            else{
                console.log('Tao thanh tam giac can');
            }
        }
        else{
            if ((m**2 == n**2 + p**2) || (n**2 == m**2 + p**2) || (p**2 == n**2 + m**2) ){
                console.log('Tao thanh tam giac vuong');
            }
            else{
                ('Tao thanh tam giac thuong')
            }
        }
    }
}
console.log('\n');


console.log('Bai 9: ');
let bai9 = 'j97'
bai9_ascii = bai9.charCodeAt()
if (bai9_ascii > 122){
    console.log(bai9 + ' khong phai la chu cai');
}
else{
    if (bai9_ascii > 96){
        console.log(bai9 + ' la chu in thuong')
    }
    else{
        if ((bai9_ascii > 64) && (bai9_ascii < 91)){
            console.log(bai9 + ' la chu in hoa');
        }
        else{
            console.log(bai9 + ' khong phai la chu cai');
        }
    }
}
console.log('\n');


console.log('Bai 10: ');
let bai10 = '2024'
let chia100 = bai10 % 100;
let chia4 = bai10 % 4;
let chia400 = bai10 % 400;
if (chia100 == 0){
    if (chia400 == 0){
        console.log('Nam ' + bai10 + ' la nam nhuan');
    }
    else{
        console.log('Nam ' + bai10 + ' khong phai la nam nhuan');
    }
}
else{
    if (chia4 == 0){
        console.log('Nam ' + bai10 + ' la nam nhuan');
    }
    else{
        console.log('Nam ' + bai10 + ' khong phai la nam nhuan');
    }
}
console.log('\n');


console.log('Bai 11: ');
let bai11 = 100
let tong = 0
for(var i=1; i<=bai11; i++){
    tong += i
}
console.log(tong);
console.log('\n');
