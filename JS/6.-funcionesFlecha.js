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
const sumarTres = num => {
  console.log(num);
};
sumarTres(20); //20

//sin parametros los parentesis son obligatorios
const saludar = () => console.log("Hola");
saludar(); //'Hola'

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
const mensajeDos = nombre => {
  return 'hola soy ' + nombre;
};
const resultadoCuatro = mensajeDos('Yumiko');
console.log(resultadoCuatro); //'hola soy Yumiko'

//si se tiene un solo return se puede omitir los parentesis y el return
const mensajeTres = nombre => 'hola soy ' + nombre;
const resultadoCinco = mensajeTres('sunset');
console.log(resultadoCinco); //'hola soy sunset'

//Sin paréntesis, esta es la forma más concisa y común cuando la función tiene un solo retorno y no necesita estructuras complejas
const mensaje = (nombre) => 'Hola soy ' + nombre;

const resultado = mensaje('Shimmer');
console.log(resultado); // 'Hola soy Shimmer'

//Con parentesis son útiles para claridad visual, especialmente cuando se trabaja con múltiples líneas o estructuras complejas como objetos o JSX:
const mensaje = (nombre) => (
  'Hola soy ' + nombre
);

const resultado = mensaje('Shimmer');
console.log(resultado); // 'Hola soy Shimmer'

// Uso obligatorio de parentesis cuando retornas un objeto literal
const crearObjeto = () => ({
  clave: 'valor',
  numero: 42,
});
console.log(crearObjeto()); // { clave: 'valor', numero: 42 }

//por defecto num sera uno
const sumaSeis = (num = 1) => {
  console.log(num + 3); //4
};
sumaSeis();
