'use strict';

let first = document.getElementById('first')
let second = document.getElementById('second')

first.addEventListener('click', f)
first.addEventListener('click', border)


console.log(first.onclick);

function f(){
    first.classList.toggle('red')
}

function border(){
    first.classList.toggle('border')
}