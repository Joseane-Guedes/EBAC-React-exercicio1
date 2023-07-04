// Forma 1: Utilizando uma div com texto simples
let shape1 = document.createElement('div');
shape1.className = 'shape';
shape1.textContent = 'Hello World - Forma 1';
document.getElementById('container').appendChild(shape1);

// Forma 2: Utilizando um elemento de cabeçalho h1
let shape2 = document.createElement('h1');
shape2.textContent = 'Hello World - Forma 2';
document.getElementById('container').appendChild(shape2);

// Forma 3: Utilizando um parágrafo p
let shape3 = document.createElement('p');
shape3.textContent = 'Hello World - Forma 3';
document.getElementById('container').appendChild(shape3);

// Forma 4: Utilizando um span
var shape4 = document.createElement('span');
shape4.textContent = 'Hello World - Forma 4';
document.getElementById('container').appendChild(shape4);

// Forma 5: Utilizando um elemento de lista li
var shape5 = document.createElement('li');
shape5.textContent = 'Hello World - Forma 5';
document.getElementById('container').appendChild(shape5);

