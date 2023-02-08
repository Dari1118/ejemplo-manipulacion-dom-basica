//la forma correcta de trabjar es crear variables que representen los elementos del HTML

const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');



//Una de las forma de agregar eventos es agregar onclik en el HTML
// no es necesario ponerle los parentesis a la función, cuando estemos usando el addEventListener

form.addEventListener('click', sumaInputValues);

//eventListener

function sumaInputValues (event) {
    //console.log({event});
    event.preventDefault();
    const sumaInputs = input1.value + input2.value;
    pResult.innerText = 'Resultado: ' + sumaInputs; 

}

/* funcion para escuchar eventos en el HTML con onclick y devolver un valor
function btnOnClic () {
    const sumaInputs = input1.value + input2.value;
    pResult.innerText = 'Resultado: ' + sumaInputs; 

}

/*
console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input
});

//Forma más básica para prteger de ateques

h1.innerText = 'Titulo nuevo';
h1.innerHTML = 'Titulo <br> nuevo';
//Nos ayuda a leer alguna de los atrinbutos que tiene nuestro elemento
console.log(h1.getAttribute('class')); 
//Modificar el atributos de nuestros elementos
h1.setAttribute('class', 'rojo');
//Otra función para agregar 
h1.classList.add('azul');
//para eliminar una clase en especifico y no todas
h1.classList.remove('azul');
//Es bueno cuando hayan eventos para agragar y quitar
h1.classList.toggle('azul');
//Devuelve true o false si tiene o no la clase
h1.classList.contains('azul');

input.value = '456';

const img = document.createElement('img');
img.setAttribute('src', 'https://i.ytimg.com/vi/sFbt7Icd9RI/maxresdefault.jpg');
console.log(img);
//pid.innerHTML = '';
//pid.append(img);



*/
