//Las template strings permiten crear cadenas dinámicas usando la sintaxis `${}` para insertar variables o expresiones.
const numero = (num1, num2) => {
  return `el numero es: ${num1 + num2}`;
};
const resultado = numero(10, 20);
console.log(resultado); //'El número es: 30'

//Si solo hay un return, puedes simplificar eliminando las llaves y la palabra clave return:
const numeroDos = (num1, num2) => `el numero es: ${num1 + num2}`;
const resultadoDos = numeroDos(30, 40);
console.log(resultadoDos); //'El número es: 110'

//Los paréntesis pueden envolver el retorno si es más claro o necesario
const numeroTres = (num1, num2) => (
    `el numero es: ${num1 + num2}`
)
const resultadoTres = numeroTres(50, 60);
console.log(resultadoTres); //'El número es: 110'
