import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("popxUser"));

    if (!storedUser) {
      alert("No account found. Please sign up first.");
      return;
    }

    if (
      form.email === storedUser.email &&
      form.password === storedUser.password
    ) {
      navigate("/account");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Signin to your POPX account</h2>

      <InputField
        label="Email Address"
        name="email"
        value={form.email}
        onChange={handleChange}
      />

      <InputField
        label="Password"
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
      />

      <button className="primary-btn">
        Login
      </button>
    </form>
  );
}

export default Login;