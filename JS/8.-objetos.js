//objetos
const mascota = {
  nombre: 'Tom',
  edad: 10,
  vivo: true,
  razas: ['peludo', 'negro'],
};
console.log(mascota); //{ nombre: 'Tom', edad: 10, vivo: true, razas: [ 'peludo', 'negro' ] }
console.log(mascota.nombre); //Tom
console.log(mascota.edad); //10
console.log(mascota.vivo); //true

//agregar otra propiedad
mascota.id = 1;
console.log(mascota);

