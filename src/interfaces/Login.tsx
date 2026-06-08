// Importaciones 
import React, { useState } from 'react';
import { HiOutlineMail } from 'react-icons/hi'; 
import { RiEyeCloseLine } from 'react-icons/ri'; 
// @ts-ignore
import './Login.css';

// Correo y contraseña de pruebas que seran validos
const USER_VALIDO = "admin@domoserv.cl";
const PASS_VALIDA = "domo2026";


export const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorEmail(false);
    setErrorPassword(false);

    // Caso 1, Email invalido
    if (email !== USER_VALIDO) {
      setErrorEmail(true);
      return;
    }

    // Caso 2, Correo valido, Contraseña incorrecta
    if (password !== PASS_VALIDA) {
      setErrorPassword(true);
      return;
    }

    // Caso 3 Correo valido y contraseña validas
    setIsLoading(true);
    
    // Temporizador de 5 segundos (5000 milisegundos)
    setTimeout(() => {
      setIsLoading(false);
      setIsLoggedIn(true);
      console.log("Carga completa. Entrando a DomoServ...");
    }, 5000);
  };

  
  if (isLoading) {
    return (
      <div className="domo-login-container">
        <div className="loader-box">
          <div className="spinner"></div>
          <p className="loading-text">Conectando con el servidor DomoServ...</p>
        </div>
      </div>
    );
  }

  if (isLoggedIn) {
    return (
      <div className="domo-login-container">
        <div className="success-box">
          <h2>¡Acceso Concedido!</h2>
          <p>Cargando panel de control de dispositivos...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="domo-login-container">
      <div className="domo-login-content">
        
        <div className="domo-logo-area">
          <h1 className="domo-logo-title">DomoServ</h1>
          <h2 className="domo-subtitle">Inicio de sesión</h2>
        </div>

        <form onSubmit={handleSubmit} className="domo-form-wrapper">
          <div className="domo-blue-card">
            
            <div className="domo-input-field">
              <HiOutlineMail className="domo-icon" />
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ingrese su correo electrónico"
                required
              />
            </div>
            {errorEmail && (
              <div className="domo-alert-message shake-effect">
                Correo inválido o no registrado
              </div>
            )}

            <div className="domo-input-field">
              <RiEyeCloseLine className="domo-icon" />
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Ingrese su contraseña"
                required
              />
            </div>
            {errorPassword && (
              <div className="domo-alert-message shake-effect">
                Contraseña incorrecta
              </div>
            )}

          </div>

          <button type="submit" className="domo-btn-confirmar">
            Confirmar
          </button>
        </form>

        <div className="domo-register-footer">
          <p>¿No tienes una cuenta registrada? <a href="#registrar">Regístrate aquí</a></p>
        </div>

      </div>
    </div>
  );
};