'use strict';
/* AUNTES
// metodo del objeto document, sellecciona los elementos como si fueran cosas del css
// clase
//              sellecciona eemento --------- se lee contenido
console.log(document.querySelector('.message').textContent);
// asi se puede modificar
// document.querySelector('.message').textContent = 'Jajajajaj';

// id
// document.querySelector('#message');

// el DOM es un objeto que tiene todos los contenidos de la pagina
// con la manipulacion del DOM se pueden cambiar los contenidos de una pagina solo usando javascript
// el dom permite acceder a elementos del css y del html, es una conexion entre el html y el codido de js, el dom se crea cuando se carga la pagina de forma
// automatica
// document es el punto de entrada al dom, el primer hijo del dom es el html, luego le siguen el head y el body como hijos
// el dom no es parte de JS, este es parte de las WEB APIs a las que se puede acceder mediante el JS, es una libreria escirta en js que esta disponible automaticamente

// se agarra el pedazo de html y luego se modifica
document.querySelector('.message').textContent = 'Correct Number! 🎉';

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 25;

// con la propiedad de value se puede obtener lo del input y manipular el placeholder
document.querySelector('.guess').value = 3;
console.log(document.querySelector('.guess').value);
*/
// math es un objeto que nos da JS
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// let score = Number(document.querySelector('.score').textContent);
let score = 20;

// let score = Number(document.querySelector('.score').textContent);
let highScore = 0;

const displayMessage = (message) => {
    document.querySelector('.message').textContent = message;
};

// primero se pasa el tipo de evento y luego qué hacer, es decir, cuál es la reacción
// esto es una funcion anonima
document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value);
    //   lo saca como un numero

    //   se invierte el null(que avalua a falso)
    if (!guess) {
        // document.querySelector('.message').textContent = 'No number ⛔';
        displayMessage('No number ⛔');
        score--;
    } else if (guess === secretNumber) {
        // document.querySelector('.message').textContent = 'Correct Number! 🎉';
        displayMessage('Correct Number! 🎉');
        document.querySelector('.number').textContent = secretNumber;
        // manipulando estilos, es todo el elemento, las propiedades de css se llaman igual solo que con camel case
        // no se cambia el archivo css, solo los inline-styles
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if (highScore < score) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    } else if (score > 1) {
        // document.querySelector('.message').textContent =
        //     guess > secretNumber ? 'The number is too high! 📈' : 'The number is too low! 📉';
        // score--;
        displayMessage(guess > secretNumber ? 'The number is too high! 📈' : 'The number is too low! 📉');
        score--;
    } else {
        document.querySelector('.message').textContent = 'You have lost te game! 🤦‍♀️';
        document.querySelector('.score').textContent = 0;
        return;
    }

    document.querySelector('.score').textContent = score;
});

document.querySelector('.again').addEventListener('click', () => {
    // si haces esto estas redeclarando variables que solo se guardan adentro de este scope
    // let score = 20;
    // let secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('body').style.backgroundColor = '#222';
    // document.querySelector('.message').textContent = 'Start guessing... ';
    displayMessage('Start guessing... ');
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
});
