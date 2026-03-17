import { useNavigate } from "react-router-dom";

function Welcome() {

  const navigate = useNavigate();

  return (
    <div className="welcome-container">

      <div className="welcome-content">

        <h1 className="welcome-title">Welcome to POPX</h1>

        <p className="welcome-text">
          Welcome to HomePage of POPX
        </p>

        <button
          className="primary-btn"
          onClick={() => navigate("/signup")}
        >
          Create Account
        </button>

        <button
          className="secondary-btn"
          onClick={() => navigate("/login")}
        >
          Already Registered? Login
        </button>

      </div>

    </div>
  );
}

export default Welcome;