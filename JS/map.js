const obtenerPokemones = async () => {
  try {
    let arrayNombres = [];
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/');
    const data = await res.json();
    // console.log(data.results);
    // data.results.map(poke => console.log(poke))
    arrayNombres = data.results.map((poke) => poke.name);
    console.log(arrayNombres);
  } catch (error) {
    console.log(error);
  }
};
obtenerPokemones();
