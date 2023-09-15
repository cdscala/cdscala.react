import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Login.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/category");
  }, [user, loading]);
  return (
    <div className="login">
      <div className="login__container">
        <input
          type="text"
          className="login__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Direccion de correo"
        />
        <input
          type="password"
          className="login__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseña"
        />
        <button
          className="login__btn"
          onClick={() => logInWithEmailAndPassword(email, password)}
        >
          Ingresar
        </button>
        <button className="login__btn login__google" onClick={signInWithGoogle}>
          Ingresar con Google
        </button>
        <div>
          <Link to="/reset">Olvide mi contraseña</Link>
        </div>
        <div>
          No tienes una cuenta? <Link to="/register">Registrate</Link> ahora.
        </div>
      </div>
    </div>
  );
}
export default Login;