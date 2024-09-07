import "./css/index.css";
import Formulario from "./formulario";

import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";

import dayjs from "dayjs";
import Formulariocopy from "./formulario copy";

//onAccept={handleOkClick}

export default function Logocopy2() {
  const [selectedDate, setSelectedDate] = React.useState(); // Estado para la fecha seleccionada
  const [dates, setDates] = React.useState([]); // Estado para almacenar las fechas seleccionadas

  const handleDateChange = (newValue) => {
    setSelectedDate(newValue); // Actualiza el estado de la fecha seleccionada
  };

  const handleCaptureDate = () => {
    // Añade la fecha seleccionada a la lista de fechas
    setDates((prevDates) => [...prevDates, selectedDate.format("DD/MM/YYYY")]);
  };

  const currentDate = dayjs();

  return (
    <>
      <div className="flex flex-col items-center">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <h2>Fecha actual: {currentDate.format("DD/MM/YYYY")}</h2>
          <StaticDatePicker
            orientation="portrait"
            value={selectedDate}
            onChange={handleDateChange}
            onAccept={handleCaptureDate} // Captura la fecha cuando se acepta
          />
        </LocalizationProvider>

        <div className="mt-4">
          <h3>Fechas seleccionadas:</h3>
          <ul>
            {dates.map((date, index) => (
              <li className="flex flex-col items-center" key={index}>
                {date}
                <Formulario />
                <Formulariocopy />
                <input type="text" placeholder="texto" />
                <button>ok 👌</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
