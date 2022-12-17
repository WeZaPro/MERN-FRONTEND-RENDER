//rafce
import React, { useState } from "react";
import { register } from "../functions/auth";
import "../components/style.css";

const Register = () => {
  const [value, setValue] = useState({
    name: "",
    email: "",
    password: "",
    password1: "",
  });

  const [passwordShown, setPasswordShown] = useState(false);

  const handleChange = (e) => {
    // console.log("e---> ", e.target.name);
    // console.log("e---> ", e.target.value);
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };
  //console.log("value---> ", value);

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log("e---> ", e);
    //console.log(value);
    if (value.password !== value.password1) {
      alert("Password not match");
    } else {
      register(value)
        .then((result) => {
          console.log("result-->", result.response);
          if (result === true) e.target.reset();
        })
        .catch((err) => {
          console.log("error--> ", err.response);
        });
    }
  };

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
    var x = document.getElementById("myDIV");
    if (x.innerHTML === "Show Password") {
      x.innerHTML = "Hide Password";
    } else {
      x.innerHTML = "Show Password";
    }
    //console.log("set---> ", setPasswordShown(!passwordShown));
  };
  return (
    <div className="form">
      <div className="form-body">
        <form onSubmit={handleSubmit}>
          <div className="username">
            <label className="form__label">Username</label>
            <input
              className="form__input"
              type="text"
              name="name"
              placeholder="User name"
              onChange={handleChange}
            />
          </div>
          <div className="email">
            <label className="form__label">Email </label>
            <input
              className="form__input"
              type="email"
              name="email"
              placeholder="Email address"
              onChange={handleChange}
            />
          </div>
          <div className="password">
            <label className="form__label">Password </label>
            <input
              className="form__input"
              type={passwordShown ? "text" : "password"}
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />
          </div>

          <div className="password1">
            <label className="form__label">Confirm password </label>
            <input
              className="form__input"
              type={passwordShown ? "text" : "password"}
              name="password1"
              placeholder="Confirm password"
              onChange={handleChange}
            />
          </div>

          <div className="row col-12 d-flex justify-content-center text-black">
            <button disabled={value.password.length < 6}>Submit</button>
          </div>
        </form>
        <div className="row col-12 d-flex justify-content-center text-black">
          <button
            disabled={value.password1.length < 6}
            onClick={togglePassword}
          >
            <div id="myDIV">Show Password</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
