import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setIsLoggedIn }) {
  const history = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    dob: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // fetch("http://localhost:3001/.Login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formData),
    // })
    //   .then((r) => r.json())
    //   .then((user) => {
        setIsLoggedIn(true);

    history("/");
//   })
}

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <input
        type="text"
        name="username"
        fluid label="username"
        value={formData.username}
        onChange={handleChange}
      />
      <input
        type="dob"
        name="dob"
        value={formData.dob}
        onChange={handleChange}
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
