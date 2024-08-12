import { useState } from "react";

const Controlado = () => {
  //Inicializar el objeto con las variables de entrada de value
  const [todo, setTodo] = useState({
    title: 'Todo #01',
    description: 'Descripción #01',
    state: 'pendiente'
  })
  const [title, setTitle] = useState('Todo #01')
  const [description, setDescription] = useState('Descripción #01')
  const [state, setState] = useState('pendiente')
  //Se crea la funcion que capturara el evento
  const handleSubmit = (e) => {
    e.preventDefault();//Se coloca para que no envie por defecto al url
    //Enviar los Datos
    console.log(todo.title);
    console.log(todo.description);
    console.log(todo.state);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="form-control mb-2"
        type="text"
        placeholder="Ingrese Todo"
        name="title"
        value={todo.title}
        onChange={e => setTodo({...todo, title:e.target.value})}
      />
      <textarea
        className="form-control mb-2"
        placeholder="Ingrese descripción"
        name="description"
        value={todo.description}
        onChange={e => setTodo({...todo, description:e.target.value})}
      />
      <select
        className="form-select mb-2"
        name="state"
        value={todo.state}
        onChange={e => setTodo({...todo, state:e.target.value})}
      >
        <option value="pendiente">Pendiente</option>
        <option value="completado">Completado</option>
      </select>
      <button className="btn btn-primary" type="submit">
        Procesar
      </button>
    </form>
  );
};
export default Controlado;
