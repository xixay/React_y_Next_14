// En este enfoque, se utiliza forEach para iterar sobre cada elemento y construir manualmente un nuevo array.
// Importar la librería
import fetch from 'node-fetch';

// Realizar el fetch
fetch('https://pokeapi.co/api/v2/pokemon/')
  .then(res => res.json()) // Convertir la respuesta a JSON
  .then(data => {
    let arrayNombres = []; // Crear un array vacío
    data.results.forEach(element => {
      arrayNombres.push(element.name); // Agregar el nombre de cada Pokémon al array
    });
    console.log(arrayNombres); // Mostrar el array final
  })
  .catch(error => console.log(error)); // Capturar errores

//respuesta
/**
 * [
  'bulbasaur',  'ivysaur',
  'venusaur',   'charmander',
  'charmeleon', 'charizard',
  'squirtle',   'wartortle',
  'blastoise',  'caterpie',
  'metapod',    'butterfree',
  'weedle',     'kakuna',
  'beedrill',   'pidgey',
  'pidgeotto',  'pidgeot',
  'rattata',    'raticate'
]
 */

//En este enfoque, se utiliza la función map, que permite transformar el array original en uno nuevo de forma más concisa y declarativa.
// Función asincrónica para obtener los datos
const obtenerPokemones = async () => {
  try {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/'); // Hacer el fetch
    const data = await res.json(); // Convertir la respuesta a JSON
    const arrayNombres = data.results.map(pokemon => pokemon.name); // Usar map para extraer los nombres
    console.log(arrayNombres); // Mostrar el array final
  } catch (error) {
    console.log(error); // Capturar errores
  }
};

// Llamar a la función
obtenerPokemones();

  //obteniendo el array usando maps
  /**
   * [
  'bulbasaur',  'ivysaur',
  'venusaur',   'charmander',
  'charmeleon', 'charizard',
  'squirtle',   'wartortle',
  'blastoise',  'caterpie',
  'metapod',    'butterfree',
  'weedle',     'kakuna',
  'beedrill',   'pidgey',
  'pidgeotto',  'pidgeot',
  'rattata',    'raticate'
]
   */