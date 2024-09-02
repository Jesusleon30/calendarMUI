import "./css/index.css";
import { useState } from "react";

export default function Logocopy3() {
  const [values, setValues] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    reference: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleForm = (event) => {
    event.preventDefault();
    console.log(values);
  };

  return (
    <>
      <div>
        <p>hola desde logo copy 3</p>
      </div>
      <div>
        <form className="flex flex-col gap-2 w-1/2" onSubmit={handleForm}>
          <h1>Form</h1>
          <input
            type="text"
            name="name"
            value={values.name}
            placeholder="ingrese su name"
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="lastName"
            value={values.lastName}
            placeholder="ingrese su lastName"
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="email"
            value={values.email}
            placeholder="ingrese su e-mail"
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="password"
            value={values.password}
            placeholder="ingrese su password"
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="phone"
            value={values.phone}
            placeholder="ingrese su phone"
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="address"
            value={values.address}
            placeholder="ingrese su  address"
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="reference"
            value={values.reference}
            placeholder="ingrese su reference"
            onChange={handleInputChange}
          />
          <button className="bg-orange-500" type="submit">
            Send data
          </button>
        </form>
      </div>
      <div>
        <div>
          <h2>Values:</h2>
          <pre>{JSON.stringify(values, null, 2)}</pre>
        </div>
      </div>
    </>
  );
}
