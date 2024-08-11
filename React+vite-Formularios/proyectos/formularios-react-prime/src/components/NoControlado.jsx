import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { useRef, useState } from 'react';

const Nocontrolado = () => {
  const [state, setState] = useState('completado');

  const options = [
    { label: 'Pendiente', value: 'pendiente' },
    { label: 'Completado', value: 'completado' },
  ];

  const form = useRef(null);
  const [error, setError] = useState("");
  //Se crea la funcion que capturara el evento
  const handleSubmit = (e) => {
    e.preventDefault();//Se coloca para que no envie por defecto al url
    //al inicio del formulario poner el mensaje de error vacio, por defecto
    setError('');
    // console.log(form.current);
    //Capturar datos
    const data = new FormData(form.current);
    const { title, description, value } = Object.fromEntries([...data.entries()]);
    //validar los datos
    if(!title.trim() || !description.trim() || !value.trim()) return setError('Llena todos los campos');
    //Enviar Datos
    console.log(title);
    console.log(description);
    console.log(value);
  };

  return (
    <form onSubmit={handleSubmit} ref={form} className="p-fluid">
      <div className="field mb-3">
        <label htmlFor="title" className="block mb-2">
          Ingrese Todo
        </label>
        <InputText name="title" defaultValue="todo #01"/>
      </div>

      <div className="field mb-3">
        <label htmlFor="description" className="block mb-2">
          Ingrese descripción
        </label>
        <InputTextarea name="description" rows={5} defaultValue="descripcion #01"/>
      </div>

      <div className="field mb-3">
        <label htmlFor="state" className="block mb-2">
          Seleccione un estado
        </label>
        <Dropdown
          name="value"
          value={state}
          onChange={(e) => setState(e.value)}
          options={options}
          optionLabel="label"
          placeholder="Seleccione un estado"
          defaultValue="pendiente"
        />
      </div>

      <div className="field mb-3 mt-4">
        <Button label="Procesar" icon="pi pi-check" type="submit" className="w-full" />
        {error != "" && error}
      </div>
    </form>
  );
};
export default Nocontrolado;
