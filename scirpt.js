const passwordBox = document.querySelector('#password');

const btn = document.querySelector('button')
const copy = document.querySelector('#copy')

const length = 12;
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; 
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const number = '1234567890';
const symbol = '!@#$%^&*()_-+=[]{};:|,.?`~';

const allChar = upperCase + lowerCase + number + symbol;

btn.addEventListener('click', (e) =>{
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while( length > password.length){
        password += allChar[Math.floor(Math.random() * allChar.length)]
        
    }
    console.log(passwordBox.value = password)
  

})


copy.addEventListener('click', (e) =>{
    passwordBox.select()
    document.execCommand('copy')
})


