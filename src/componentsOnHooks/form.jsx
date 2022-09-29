import React, { useState } from "react";

const Form = () => {
  const [f, setF] = useState({ name: "", surname: "" });

  const handleInputChange = (event) => {
    const { target } = event;
    const { value } = target;
    const { name } = target;

    setF({ ...f, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, surname } = f;
    const result = `Hi ${name} ${surname}`;
    alert(result);
  };

  const { name, surname } = f;

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Surname:
        <input
          type="text"
          name="surname"
          value={surname}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Form;
