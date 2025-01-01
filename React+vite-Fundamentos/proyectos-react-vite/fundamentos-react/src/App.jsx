import imgUno from './assets/images/img-1.jpg';

import MyButton from './components/MyButton';
import WelcomeText from './components/WelcomeText';
import ListFruts from './components/fruts/ListFruts';
import ButtonState from './components/ButtonState';

const App = () => {
  const title = 'Mi titulo desde una constante';
  const classTitle = 'text-center';
  // const pathImg = 'src/assets/images/img-1.jpg';
  const user = false;

  const fruts = ['manzana', 'platano', 'pera'];
  const frutsTwo = ['naranja', 'melon', 'sandia'];

  return (
    <>S
    <ButtonState/>
      <h1 className={classTitle}>{title}</h1>
      <img src={imgUno} alt={`imagen-${title}`} />

      <MyButton text="botón 1" />
      <MyButton text="botón 2" />
      <MyButton text="botón 3" />
      <WelcomeText user={user} />
      <ListFruts fruts={fruts} />
      <ListFruts fruts={frutsTwo} />
    </>
  );
};

export default App;
