import { useState } from "react";
import { useNavigate } from "react-router-dom";

import IconoEmail from "../assets/Botones/Logo_Email.svg?react";
import IconoOjo from "../assets/Botones/Logo_Ojo_Cerrado.svg?react";

import "../styles/Login.css";

const USER_VALIDO = "admin@domoserv.cl";
const PASS_VALIDA = "domo2026";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {

    e.preventDefault();

    setErrorEmail(false);
    setErrorPassword(false);

    if (email !== USER_VALIDO) {
      setErrorEmail(true);
      return;
    }

    if (password !== PASS_VALIDA) {
      setErrorPassword(true);
      return;
    }

    setIsLoading(true);

    setTimeout(() => {

      setIsLoading(false);

      localStorage.setItem(
        "logueado",
        "true"
      );

      navigate("/home");

    }, 2000);
  };

  if (isLoading) {
    return (
      <div className="domo-login-container">
        <div className="loader-box">
          <div className="spinner"></div>

          <p className="loading-text">
            Conectando con DomoServ...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="domo-login-container">

      <div className="domo-login-content">

        <div className="domo-logo-area">
          <h1 className="domo-logo-title">
            DomoServ
          </h1>

          <h2 className="domo-subtitle">
            Inicio de sesión
          </h2>
        </div>

        <form
          onSubmit={handleSubmit}
          className="domo-form-wrapper"
        >

          <div className="domo-blue-card">

            <div className="domo-input-field">

              <IconoEmail className="domo-icon" />

              <input
                type="email"
                value={email}
                onChange={(e) =>
                  setEmail(
                    e.target.value
                  )
                }
                placeholder="Ingrese su correo electrónico"
                required
              />

            </div>

            {errorEmail && (

              <div className="domo-alert-message">

                Correo inválido o no registrado

              </div>

            )}

            <div className="domo-input-field">

              <IconoOjo className="domo-icon" />

              <input
                type="password"
                value={password}
                onChange={(e) =>
                  setPassword(
                    e.target.value
                  )
                }
                placeholder="Ingrese su contraseña"
                required
              />

            </div>

            {errorPassword && (

              <div className="domo-alert-message">

                Contraseña incorrecta

              </div>

            )}

          </div>

          <button
            type="submit"
            className="domo-btn-confirmar"
          >

            Confirmar

          </button>

        </form>

        <div className="domo-register-footer">

          <p>

            ¿No tienes una cuenta registrada?

            {" "}

            <a href="#registrar">

              Regístrate aquí

            </a>

          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;