import ProTypes from 'prop-types'
const MyButton = (props) => {
  return (
    <button>{props.text} - {props.edad}</button>
  )
 }

 MyButton.proTypes = {
  text: ProTypes.string.isRequired,//El campo sera string y sera requerido
  edad: ProTypes.number.isRequired,//El campo sera numerico y sera requerido
 }

const App = () => {
  return (
    <div>
      <MyButton text = 'text' edad = {10}></MyButton>
    </div>
  )
};
export default App;