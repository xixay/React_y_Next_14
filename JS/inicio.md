## fetch
- Normal
```js
fetch('https://pokeapi.co/api/v2/pokemon/')
  .then((res) => res.json())
  .then((data) => {
    data.results.forEach((element) => {
      console.log(element.name);
    });
  })
  .catch((error) => console.log(error));
```
- Array
```js
fetch('https://pokeapi.co/api/v2/pokemon/')
    .then( res => res.json())
    .then(data => {
        let arrayNombres = [];
        data.results.forEach(element => {
            // console.log(element.name)
            arrayNombres.push(element.name);
        });
        console.log(arrayNombres)
    })
    .catch(error => console.log(error))
```
## Async y await
```js
const obtenerPokemones = async () => {
  try {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/');
    const data = await res.json();
    console.log(data.results);
  } catch (error) {
    console.log(error);
  }
};
obtenerPokemones();
```
## map
- fetch
```js
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
```
## fylter
```js
const obtenerPokemones = async () => {
  try {
    let arrayNombres = [];
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/');
    const data = await res.json();
    arrayNombres = data.results.fylter(poke => poke.name === 'bulbasaur');
    console.log(arrayNombres);
  } catch (error) {
    console.log(error);
  }
};
obtenerPokemones();
```
