import React, { useState } from 'react';
import { HiOutlineMail } from 'react-icons/hi'; 
import { RiEyeCloseLine } from 'react-icons/ri'; 
import './Login.css';

const USER_VALIDO = "admin@domoserv.cl";
const PASS_VALIDA = "domo2026";

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const [errorEmail, setErrorEmail] = useState(false);
const [errorPassword, setErrorPassword] = useState(false);

const [isLoading, setIsLoading] = useState(false);
const [isLoggedIn, setIsLoggedIn] = useState(false);

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault(); 
  setErrorEmail(false); // Resetea el error de correo
  setErrorPassword(false); // Resetea el error de la contraseña

  // Caso 1 Si el correo no es valido
  if (email !== USER_VALIDO) {
    setErrorEmail(true); // Lanza la alerta de correo
    return; 
  }

  // Caso 2, Correo valido, pero contraseña incorrecta
  if (password !== PASS_VALIDA) {
    setErrorPassword(true); // Lanza alerta de contraseña incorrecta
    return; 
  }

  // Caso 3, todo correcto
  setIsLoading(true); // Salta una pantalla de carga
  
  // Temporizador * Configurado a priori a 5 segundos (5000 milisegundos)
  setTimeout(() => {
    setIsLoading(false); 
    setIsLoggedIn(true); 
  }, 5000);
};

if (isLoading) {
  return (
    <div className="domo-login-container">
      <div className="loader-box">
        <div className="spinner"></div> {/* El círculo giratorio en CSS */}
        <p className="loading-text">Conectando con DomoServ...</p>
      </div>
    </div>
  );
}

<div className="domo-blue-card">
  <div className="domo-input-field">
    <HiOutlineMail className="domo-icon" /> {/* Dibuja el sobre */}
    <input 
      type="email" 
      value={email} // Conecta el input con nuestra variable del estado
      onChange={(e) => setEmail(e.target.value)} // Cada vez que el usuario teclea, guarda el texto en la variable
      placeholder="Ingrese su correo electrónico"
      required
    />
  </div>
  {/* Renderizado lógico: SI errorEmail es true, muestra el div del error. Si es false, no dibuja nada */}
  {errorEmail && (
    <div className="domo-alert-message shake-effect">
      Correo inválido o no registrado
    </div>
  )}
</div>
