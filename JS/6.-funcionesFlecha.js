//funciones
//funcion normal
function sumar(num) {
  console.log(10);
}
sumar(10); //10

//funcion flecha
const sumarDos = (num1, num2) => {
  console.log(num1 + num2);
};
sumarDos(20, 30); //50

//con solo un parametro se puede omitir parentesis
const sumarTres = (num) => {
  console.log(num);
};
sumarTres(20); //20

//si se tiene return esta devolviendo un valor
const sumarCuatro = (num1, num2) => {
  return num1 + num2;
};
const resultado = sumarCuatro(20, 30);
console.log(resultado); //50

//si solo tiene un return se puede omitir las llaves
const sumarCinco = (num1, num2) => num1 + num2;
const resultadoDos = sumarCinco(20, 30);
console.log(resultadoDos); //50

//retornar string
const mensaje = () => {
  return 'hola soy xixay';
};
const resultadoTres = mensaje();
console.log(resultadoTres); //'hola soy xixay'

//si se tiene solo un parametro se puede omitir los parentesis
const mensajeDos = (nombre) => {
  return 'hola soy ' + nombre;
};
const resultadoCuatro = mensajeDos('Yumiko');
console.log(resultadoCuatro); //'hola soy Yumiko'

//si se tiene un solo return se puede omitir los parentesis y el return
const mensajeTres = (nombre) => 'hola soy ' + nombre;
const resultadoCinco = mensajeTres('sunset');
console.log(resultadoCinco); //'hola soy sunset'

//se puede colocar para retornar parentesis, todo lo que este adentro, util para etiquetas html o react
//si se tiene un solo return se puede omitir los parentesis y el return
const mensajeCuatro = (nombre) => 'hola soy ' + nombre;
const resultadoSeis = mensajeCuatro('shimmer');
console.log(resultadoSeis); //'hola soy shimmer'

//por defecto num sera uno
const sumaSeis = (num = 1) => {
  console.log(num + 3); //4
};
sumaSeis();
