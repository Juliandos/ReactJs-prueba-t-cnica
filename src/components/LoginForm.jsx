import { useState } from "react";

function LoginForm({ setIsAuthenticated }) {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setError(""); // Resetear error
    if (!user || !password) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      if (user === "admin" && password === "1234") {
        setIsAuthenticated(true);
      } else {
        setError("Credenciales incorrectas.");
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      <input
        type="text"
        placeholder="Usuario"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <p className="error">{error}</p>}
      <button onClick={handleLogin} disabled={loading}>
        {loading ? "Cargando..." : "Ingresar"}
      </button>
    </div>
  );
}

export default LoginForm;
