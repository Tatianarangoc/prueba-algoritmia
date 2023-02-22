var numero = document.querySelector('.addNumber');
var btn = document.querySelector('.btn');
var printNumbers = document.querySelector('.printNumbers');

//var numero = prompt('Ingrese un numero entero');
btn.addEventListener('click', (event) => {
  if (numero.value % 2 == 0) {
    for (let i = numero.value; i >= 0; i -= 2) {
      printNumbers.innerHTML += i + '<br>';
    }
  } else {
    for (let i = numero.value; i > 0; i -= 2) {
      printNumbers.innerHTML += i + '<br>';
    }
  }
});
