console.log('Bai 1:');
const cart = [
    {
      title: "DẾ MÈN PHIÊU LƯU KÝ",
      price: 50000,
      quantity: 2,
    },
    {
      title: "KIM ĐỒNG",
      price: 40000,
      quantity: 7,
    },
    {
      title: "NGỌN LỬA ĐÊM BA MƯƠI",
      price: 21000,
      quantity: 4,
    },
    {
      title: "CÔ BÉ GANH TỊ",
      price: 27500,
      quantity: 5,
    },
  ];
const sum = cart.reduce(function(result, item){
    return result + item.price * item.quantity}, 0)
console.log(sum);

console.log('Bai 2:');

const arrCount = [1, 2, 3, 4, 5, 2, 3, 4, 2, 2, 7, 8, 8];
const count = arrCount.reduce((pre, curr) => {
  if (!pre[curr]){
    pre[curr] = 1;
  } else {
    pre[curr]++;
  }
  return pre
}, {})
console.log(count);

