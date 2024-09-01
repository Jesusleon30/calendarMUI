import "./css/index.css";
import Formulario from './formulario'; 


// import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDateTimePicker } from "@mui/x-date-pickers/StaticDateTimePicker";

import React, { useState } from "react";
import dayjs from "dayjs";
import Button from "@mui/material/Button";

export default function Logocopy2() {
  const [selectedDateTime, setSelectedDateTime] = useState(dayjs());
  const [description, setDescription] = useState("");
  const [eventos, setEventos] = useState([]);

  const handleDateTimeChange = (newValue) => {
    setSelectedDateTime(newValue);
  };

  const handleOkClick = () => {
    if (description) {
      setEventos([
        ...eventos,
        { date: selectedDateTime.toDate().toString(), description },
      ]);
      setDescription("");
      alert("click");
    }

    console.log(
      "Fecha y hora seleccionadas:",
      selectedDateTime.format("YYYY-MM-DD HH:mm:ss")
    );
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
                value={selectedDateTime}
                onChange={handleDateTimeChange}
                onAccept={handleOkClick}
              />
            </LocalizationProvider>
            <div>
              <input
                type="text"
                placeholder="escribe un compito"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleOkClick}
              >
                OK 👌
              </Button>
            </div>
          </div>
          <div>
          </div>
          <div>Hola dentro del div para crear tipo una dashboard</div>
          <div>
            <ul>
              {eventos.map((evento, index) => (
                <li key={index} className="flex flex-col bg-orange-400">
                  <strong>
                    {dayjs(evento.date).format("DD-MM-YYYY HH:mm")} -{" "}
                    {evento.description}
                  </strong>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Formulario/>
          </div>
        </div>
      </section>
    </>
  );
}
