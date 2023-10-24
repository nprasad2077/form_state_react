import React from "react";
import { useEffect, useRef } from "react";

const FormWithoutState = () => {
  const countRef = useRef(0);

  useEffect(() => {
    countRef.current = countRef.current + 1;
  });

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
    </div>
  );
};

export default FormWithoutState;
