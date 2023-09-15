import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../../firebase";
import "./Register.css";
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const register = () => {
    if (!name) alert("Ingresa un nombre");
    registerWithEmailAndPassword(name, email, password);
  };
  return (
    <div className="register">
      <div className="register__container">
        <input
          type="text"
          className="register__textBox"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nombre completo"
        />
        <input
          type="text"
          className="register__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Direccion de correo"
        />
        <input
          type="password"
          className="register__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="contraseña"
        />
        <button className="register__btn" onClick={register}>
          Registrar
        </button>
        <button
          className="register__btn register__google"
          onClick={signInWithGoogle}
        >
          Registrar con Google
        </button>
        <div>
          Ya tienes una cuenta? <Link to="/login">Ingresa</Link> ahora.
        </div>
      </div>
    </div>
  );
}
export default Register;