const MyButton = ({ text }) => {
  // console.log(props)
  //crear la funcion flecha del mensaje
  const handleClickButton = (title) => {
    console.log('me diste click: ' + title);
  };
  //Para poder enviarle el parametro, se agrega la funcion flecha que envia el parametro
  return <button onClick={() => handleClickButton(text)}>{text}</button>;
};
//hacer la exportacion de uno solo
export default MyButton;
