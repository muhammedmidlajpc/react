import React, { useState } from "react";
import "./Form.css";
const Form = () => {
  const [submit, setsubmit] = useState({
    fname: "",
    lname: "",
    email: "",
  });
  const handleform = (e) => {
    setsubmit({ ...submit, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setsubmit({
      fname: "",
      lname: "",
      email: "",
    });

    console.log(submit);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="fname">First Name:</label>
        <input
          type="text"
          value={submit.fname}
          onChange={handleform}
          id="fname"
          name="fname"
          placeholder="First Name:"
        />
        <label htmlFor="lname">Last Name:</label>
        <input
          type="text"
          value={submit.lname}
          onChange={handleform}
          id="lname"
          name="lname"
          placeholder="Last Name:"
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          value={submit.email}
          onChange={handleform}
          id="email"
          name="email"
          placeholder="E-mail"
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Form;
