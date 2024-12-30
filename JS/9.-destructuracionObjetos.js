//Un objeto es una estructura que permite almacenar datos en pares clave-valor. Se pueden acceder y manipular fácilmente las propiedades del objeto.
const mascota = {
  nombre: 'Tom',
  edad: 10,
  vivo: true,
  razas: ['peludo', 'negro'],
};

console.log(mascota.nombre);
//Puedes acceder a las propiedades del objeto directamente:
const nombreMascota = mascota.nombre;
console.log(nombreMascota);//{ nombre: 'Tom', edad: 10, vivo: true, razas: [ 'peludo', 'negro' ] }

//La desestructuración es una forma rápida y concisa de extraer valores de un objeto en variables individuales.
const { nombre, edad, vivo, razas } = mascota;
//Esto extrae las propiedades nombre, edad, vivo y razas del objeto mascota y las asigna directamente a variables con los mismos nombres.
console.log(nombre);//Tom
console.log(edad);//10
