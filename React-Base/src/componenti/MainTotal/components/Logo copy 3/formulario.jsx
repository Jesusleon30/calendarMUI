import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { renderTimeViewClock } from "@mui/x-date-pickers/timeViewRenderers";
import dayjs from "dayjs"; // Importa dayjs si aún no lo has hecho

export default function Formulario() {
  const [selectedTime, setSelectedTime] = React.useState(dayjs()); // Estado para la hora seleccionada

  const handleTimeChange = (newValue) => {
    setSelectedTime(newValue); // Actualiza el estado con la nueva hora seleccionada
  };



  return (
    <>
      <div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["TimePicker"]}>
            <TimePicker
              label="INIZIO"
              value={selectedTime} // Establece el valor del TimePicker al estado
              onChange={handleTimeChange} // Maneja el cambio de hora
              viewRenderers={{
                hours: renderTimeViewClock,
                minutes: renderTimeViewClock,
                seconds: renderTimeViewClock,
              }}
            />
          </DemoContainer>
        </LocalizationProvider>
      </div>
      {/* Muestra la hora seleccionada */}
      <div>
        <h3>Hora seleccionada: {selectedTime.format("HH:mm")}</h3>
        <h3>Hora seleccionada: orario</h3>
      </div>
    </>
  );
}
