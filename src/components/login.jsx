import { useContext, useState } from "react";
import AppContext from "../app-context";
import "../App.css";

const Login = () => {
  const { setLoggedAdmin } = useContext(AppContext);
  const [login, setLogin] = useState("");

  const checkLogin = () => {
    const name = login.trim();
    if (name === "crudadmin" || name === "readonlyadmin") {
      setLoggedAdmin(name);
    }
  };

  return (
    <div className="loginForm">
      <label for="username">Login</label>
      <input
        name="username"
        type="text"
        value={login}
        onChange={(evt) => setLogin(evt.target.value)}
      />
      <button className="loginButton" onClick={checkLogin} disabled={!login}>
        Log In
      </button>
    </div>
  );
};

export default Login;
