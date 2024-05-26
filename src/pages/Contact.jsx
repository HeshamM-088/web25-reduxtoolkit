import React from "react";
import { useSelector } from "react-redux";

const Contact = () => {
  const { count } = useSelector((x) => x.counter);

  return (
    <div className="text-center">
      <h1>Contact</h1>
      <h1>Count is {count}</h1>
    </div>
  );
};

export default Contact;
