import React from "react";
import { useEffect, useRef, useState } from "react";

// A functional component that represents a form without using state for form fields.
const FormWithoutState = () => {
  // useRef is used to store the number of renders.
  const countRef = useRef(0);

  // useState is used to store the value of an additional input field.
  const [data, setData] = useState("");

  // useEffect increments the countRef value after every render.
  useEffect(() => {
    countRef.current = countRef.current + 1;
  });

  // handleSubmit is the function that will be called when the form is submitted.
  // It uses the FormData API to get the form values without using state.
  const handleSubmit = (e) => {
    e.preventDefault();

    // A new FormData object is created using the form element as an argument.
    const form = new FormData(e.currentTarget);

    // The form values are then extracted using the get method of FormData.
    const email = form.get("email");
    const password = form.get("password");

    // The form values are logged.
    console.log({ email, password });

    // The form values are also stored in a body object, using the entries method of FormData.
    const body = {};
    for (const [key, value] of form.entries()) {
      body[key] = value;
    }

    // The body object is logged.
    console.log(body);
  };

  // handleChange is the function that will be called when the additional input field is changed.
  // It updates the data state and logs its value.
  const handleChange = (e) => {
    e.preventDefault();
    setData(e.target.value);
    console.log(data);
  };

  // The component renders a form with two input fields and a submit button,
  // as well as an additional input field outside of the form.
  return (
    <div>
      <h2>Form without State</h2>
      <h6>Current renders {countRef.current}</h6>
      <form onSubmit={handleSubmit}>
        <div className="input-field">
          <input type="email" name="email"></input>
        </div>
        <div className="input-field">
          <input type="password" name="password"></input>
        </div>
        <button type="submit">Submit</button>
      </form>
      <div>
        <label>Old Change</label>
        <input onChange={handleChange}></input>
      </div>
    </div>
  );
};

export default FormWithoutState;
