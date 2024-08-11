import React, { useRef, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Box } from '@mui/material';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import TextareaAutosize from '@mui/material/TextareaAutosize';

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
    e.preventDefault(); //Se coloca para que no envie por defecto al url
    //al inicio del formulario poner el mensaje de error vacio, por defecto
    setError('');
    // console.log(form.current);
    //Capturar datos
    const data = new FormData(form.current);
    const { title, description, state } = Object.fromEntries([...data.entries()]);
    //validar los datos
    if(!title.trim() || !description.trim() || !state.trim()) return setError('Llena todos los campos');
    //Enviar Datos
    console.log(title);
    console.log(description);
    console.log(state);
  };

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      sx={{ display: 'flex', flexDirection: 'column', gap: 2, p: 2 }}
      onSubmit={handleSubmit} // Aquí se asocia la función de manejo de envío
      ref={form}
    >
      <TextField
        label="Ingrese Todo"
        name="title"
        variant="outlined"
        fullWidth
        defaultValue="todo #01"
      />

      <InputLabel htmlFor="description">Ingrese descripción</InputLabel>
      <TextareaAutosize
        name="description"
        minRows={5}
        placeholder="Ingrese descripción"
        style={{
          width: '100%',
          padding: '16.5px 14px',
          borderRadius: '4px',
          borderColor: 'rgba(0, 0, 0, 0.23)',
        }}
        defaultValue="descripcion #01"
      />

      <InputLabel htmlFor="state">Seleccione un estado</InputLabel>
      <Select
        id="state"
        value={state}
        onChange={(e) => setState(e.target.value)}
        fullWidth
        name="state"
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>

      <Button variant="contained" color="primary" type="submit" fullWidth sx={{ mt: 2 }}>
        Procesar
      </Button>
      {error != "" && error}
    </Box>
  );
};

export default Nocontrolado;
