const result = document.getElementById('result');
const buttons = document.querySelectorAll('.button');

let pre = '';
let curr = '';
let math = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent; 
    
        if (value === 'AC'){
            pre = ''
            curr = ''
            math = ''
            result.value = ''
        } else if (value === 'DEL'){
            result.value = result.value.slice(0, -1)
        } else if (value === '^'){
            math = '**'
            pre = curr
            curr = ''
        } else if (value === '+' || value === '-' || value === '*' || value === '/'){
            math = value;
            pre = curr;
            curr = ''
        } else if (value === '='){
            result.value = eval(`${pre}${math}${curr}`)
        } else {
            curr += value
            result.value = curr
        }
    });
});


