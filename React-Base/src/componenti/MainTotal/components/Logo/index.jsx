import "./css/index.css";

import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDateTimePicker } from "@mui/x-date-pickers/StaticDateTimePicker";

export default function Logo() {
  return (
    <>
      <section>
        <div>
          <h1 className="text-white">function logo desde main</h1>
        </div>
        <div className=" flex flex-col items-center gap-5 ">
          <div className=" flex flex-col items-center md:flex-row md:items-center m-8 gap-5 ">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <StaticDateTimePicker orientation="portrait" />
            </LocalizationProvider>
            <div>hola dentro del div para crear tipo una dashboard</div>
          </div>
          <div>aca voy a poner mis lista creadas</div>
        </div>
      </section>
    </>
  );
}
