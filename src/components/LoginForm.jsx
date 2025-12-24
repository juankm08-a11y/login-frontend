import { useState } from "react";
import "../styles/LoginForm.css";
import { useNavigate } from "react-router-dom";
import { login } from "../services/auth";

function LoginForm() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await login(form.email, form.password);
      navigate("/dashboard");
    } catch (err) {
      setStatus(err.message);
    }
  };
  return (
    <main>
      <section>
        {" "}
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Login</h2>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />
          <label>
            <input type="checkbox" value="Yes" className="login-input" />
            Remember me
          </label>
          <a href="/forgot-password">¿Olvidaste tu contraseña?</a>
          <button
            style={{}}
            type="submit"
            disabled={status === "loading"}
            className="login-btn"
          >
            {status === "loading" ? "Cargando..." : "Iniciar Sesión"}
          </button>

          {status && <p>{status}</p>}
        </form>
      </section>
    </main>
  );
}

export default LoginForm;
