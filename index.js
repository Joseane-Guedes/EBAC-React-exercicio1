let shape1 = document.createElement('div');
shape1.classList.add('shape', 'shape1'); // Usamos classList.add() para adicionar múltiplas classes
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
let shape4 = document.createElement('span');
shape4.textContent = 'Hello World - Forma 4';
document.getElementById('container').appendChild(shape4);

// Forma 5: Utilizando um elemento de lista li
let shape5 = document.createElement('li');
shape5.textContent = 'Hello World - Forma 5';
document.getElementById('container').appendChild(shape5);

// Forma 6: Utilizando um botão
let shape6 = document.createElement('button');
shape6.classList.add('shape6'); // Usamos classList.add() para adicionar múltiplas classes
shape6.textContent = 'Hello World - Forma 6';
document.getElementById('container').appendChild(shape6);

// Forma 7: Utilizando um elemento de link a
let shape7 = document.createElement('a');
shape7.href = '#';
shape7.textContent = 'Hello World - Forma 7';
document.getElementById('container').appendChild(shape7);

// Forma 8: Utilizando um elemento de título h2
let shape8 = document.createElement('h2');
shape8.textContent = 'Hello World - Forma 8';
document.getElementById('container').appendChild(shape8);

// Forma 9: Utilizando um elemento de sublinhado u
let shape9 = document.createElement('u');
shape9.classList.add('shape9');
shape9.textContent = 'Hello World - Forma 9';
document.getElementById('container').appendChild(shape9);

// Forma 10: Utilizando um elemento de ênfase em
let shape10 = document.createElement('em');
shape10.textContent = 'Hello World - Forma 10';
document.getElementById('container').appendChild(shape10);