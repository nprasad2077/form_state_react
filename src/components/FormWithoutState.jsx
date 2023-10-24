import React from "react";
import { useEffect, useRef } from "react";

const FormWithoutState = () => {
  const countRef = useRef(0);
  
  useEffect(() => {
    countRef.current = countRef.current + 1
  })

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return <div>FormWithoutState</div>;
};

export default FormWithoutState;
