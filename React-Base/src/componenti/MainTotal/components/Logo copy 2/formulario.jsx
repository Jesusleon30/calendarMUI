// hacemos una function Formulario para pasarle al RenderizadoListasProps3 usando el props
import { useState } from "react";

export default function Formulario() {
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
  });

  const handleChange = (e) => {
    console.log("name:", e.target.name);
    console.log("value:", e.target.value);
    // con esto actualizamos el estado
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div>
        <p>Hola desde el formulario</p>
      </div>
      <div>
        <form action="">
          <div>
            <label>Nombre:</label>
            <input
              type="text"
              placeholder="Juan "
              value={form.nombre}
              name="nombre"
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div>
            <label>Apellido:</label>
            <input
              type="text"
              placeholder="Perez"
              value={form.apellido}
              name="apellido"
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
        </form>
      </div>
    </>
  );
}
