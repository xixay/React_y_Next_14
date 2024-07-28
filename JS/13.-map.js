//importar la libreria
import fetch from 'node-fetch';

//fetch
fetch('https://pokeapi.co/api/v2/pokemon/')
.then(
  res => res.json() // Solo convierte a JSON no devuelve
)
.then(data => {
    let arrayNombres = []
  data.results.forEach(element => {
    arrayNombres.push(element.name);
  });
  console.log(arrayNombres)
})
.catch(error => console.log(error))

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

//usando map para obtener un nuevo array
//async await
const obtenerPockemones = async () => {
    try {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon/');
      const data = await res.json()//convierte a json
      const arrayNombres = data.results.map(pocke => pocke.name);//recorre el array y devuelve el name
      console.log(arrayNombres)
    } catch (error) {
      console.log(error);
    }
  };

  //llamar a la funcion
  obtenerPockemones();

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