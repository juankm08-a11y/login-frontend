import LoginForm from "./LoginForm";
import "../styles/LoginLayout.css";
import loginillustration from "../assets/login-illustration.png";

export default function LoginLayout() {
  return (
    <div className="login-page">
      <div className="login-illustration">
        <img src={loginillustration} alt="Login illustration" />
      </div>
      <div className="login-card-wrapper">
        <div className="login-card">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
