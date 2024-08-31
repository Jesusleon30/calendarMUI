import "./css/index.css";

// import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDateTimePicker } from "@mui/x-date-pickers/StaticDateTimePicker";

import React, { useState } from "react";
import dayjs from "dayjs";

export default function Logo() {
  const [date, setDate] = useState(dayjs());
  const [eventos, setEventos] = useState([]);
  const [descripcion, setDescripcion] = useState("");

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const handleAddEvent = () => {
    if (descripcion) {
      setEventos([
        ...eventos,
        { date: date.format("YYYY-MM-DD"), descripcion },
      ]);
      setDescripcion("");
    }
  };

  return (
    <>
      <section>
        <div>
          <h1 className="text-white">Function Logo desde main</h1>
        </div>
        <div className="flex flex-col items-center gap-5">
          <div className="flex flex-col items-center md:flex-row md:items-center m-8 gap-5">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <StaticDateTimePicker
                orientation="portrait"
                value={date}
                onChange={handleDateChange}
              />
            </LocalizationProvider>
            <div>Hola dentro del div para crear tipo una dashboard</div>
          </div>
          <div>Acá voy a poner mis lista creadas</div>
          <div>
            <h2>Agregar Evento</h2>
            <input
              type="text"
              placeholder="Descripción del Evento"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            />
            <button onClick={handleAddEvent}>Agregar Evento</button>
            <h2>Eventos</h2>
            <ul>
              {eventos.length > 0 ? (
                eventos.map((evento, index) => (
                  <li key={index}>
                    <strong>{evento.date}:</strong> {evento.descripcion}
                  </li>
                ))
              ) : (
                <li>No hay eventos agregados.</li>
              )}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
