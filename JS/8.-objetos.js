//Un objeto es una colección de propiedades y valores. Las propiedades pueden ser datos primitivos, arrays, funciones u otros objetos.
const mascota = {
  nombre: 'Tom',
  edad: 10,
  vivo: true,
  razas: ['peludo', 'negro'],
};
console.log(mascota); //{ nombre: 'Tom', edad: 10, vivo: true, razas: [ 'peludo', 'negro' ] }
// Accediendo a las propiedades
console.log(mascota.nombre); //Tom
console.log(mascota.edad); //10
console.log(mascota.vivo); //true

//Puedes añadir nuevas propiedades a un objeto existente de forma dinámica
mascota.id = 1;
console.log(mascota);

