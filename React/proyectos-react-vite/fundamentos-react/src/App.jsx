

const App = () => {

  const title = 'Mi titulo desde una constante'
  const classTitle = 'text-center'
  const pathImg = 'https://picsum.photos/200/300'

  return (
    <>
      <h1 className={classTitle}>{title}</h1>
      <img src={pathImg} alt={`imagen-${title}`} />
    </>
  )
};

export default App;