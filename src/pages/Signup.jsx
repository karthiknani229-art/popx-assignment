import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";

function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.phone || !form.email || !form.password) {
      alert("Please fill all required fields");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(form.email)) {
      alert("Please enter a valid email");
      return;
    }

    if (form.password.length < 8) {
      alert("Password must be at least 8 characters");
      return;
    }

    if (!form.agency) {
      alert("Please select if you are an agency");
      return;
    }

    // Save user
    localStorage.setItem("popxUser", JSON.stringify(form));

    navigate("/account");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create your POPX account</h2>

      <InputField
        label="Full Name"
        name="name"
        value={form.name}
        onChange={handleChange}
      />

      <InputField
        label="Phone number"
        name="phone"
        value={form.phone}
        onChange={handleChange}
      />

      <InputField
        label="Email address"
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

      <InputField
        label="Company name"
        name="company"
        value={form.company}
        onChange={handleChange}
      />

      <div className="radio-group">
        <p className="radio-label">Are you an Agency?</p>

        <div className="radio-options">
          <label>
            <input
              type="radio"
              name="agency"
              value="yes"
              onChange={handleChange}
            />
            Yes
          </label>

          <label>
            <input
              type="radio"
              name="agency"
              value="no"
              onChange={handleChange}
            />
            No
          </label>
        </div>
      </div>

      <button className="primary-btn"
      disabled={
    !form.name ||
    !form.phone ||
    !form.email ||
    !form.password ||
    !form.agency
  }
      >
        Create Account
      </button>
    </form>
  );
}

export default Signup;