//el objeto web contiene propiedades como nombre, links y redesSociales, y dentro de redesSociales, tenemos un objeto youtube con su propio conjunto de propiedades.
const web = {
  nombre: 'bluwweb',
  links: {
    enlace: 'www.bluuweb.cl',
  },
  redesSociales: {
    youtube: {
      enlace: 'youtube.com/bluuweb',
      nombre: 'bluuweb yt',
    },
  },
};
console.log(web); //{nombre: 'bluwweb', links: { enlace: 'www.bluuweb.cl' }, redesSociales: { youtube: { enlace: 'youtube.com/bluuweb', nombre: 'bluuweb yt' } }}

//En este caso, estamos accediendo al enlace de YouTube dentro del objeto redesSociales, que a su vez está dentro de web.
const enlaceYT = web.redesSociales.youtube.enlace;
console.log(enlaceYT); //youtube.com/bluuweb

//La desestructuración es una forma conveniente de extraer propiedades específicas de un objeto anidado de manera directa.

const { enlace, nombre } = web.redesSociales.youtube;
console.log(enlace);
console.log(nombre);
