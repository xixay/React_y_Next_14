import { useRef } from 'react';

const Nocontrolado = () => {
  const form = useRef(null);
  //Se crea la funcion que capturara el evento
  const handleSubmit = (e) => {
    e.preventDefault();//Se coloca para que no envie por defecto al url
    // console.log(form.current);
    const data = new FormData(form.current);
    const { title, description, state } = Object.fromEntries([...data.entries()]);
    console.log(title);
    console.log(description);
    console.log(state);
  };

  return (
    <form onSubmit={handleSubmit} ref={form}>
      <input
        className="form-control mb-2"
        type="text"
        placeholder="Ingrese Todo"
        name="title"
        defaultValue="todo #01"
      />
      <textarea
        className="form-control mb-2"
        placeholder="Ingrese descripción"
        name="description"
        defaultValue="descripcion #01"
      />
      <select className="form-select mb-2" name="state" defaultValue="completado">
        <option value="pendiente">Pendiente</option>
        <option value="completado">Completado</option>
      </select>
      <button className="btn btn-primary" type="submit">
        Procesar
      </button>
    </form>
  );
};
export default Nocontrolado;
