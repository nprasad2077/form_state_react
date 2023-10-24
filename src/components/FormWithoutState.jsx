import React from "react";
import { useEffect, useRef, useState } from "react";

const FormWithoutState = () => {
  const countRef = useRef(0);
  const [data, setData] = useState("");

  useEffect(() => {
    countRef.current = countRef.current + 1;
  });

  // Will count number of state changes. This demo should demonstrate that with React FormData, re-renders and state change is not needed.

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log({ email, password });

    const body = {};

    for (const [key, value] of form.entries()) {
      body[key] = value;
    }

    console.log(body);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setData(e.target.value);
    console.log(data);
  };

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
