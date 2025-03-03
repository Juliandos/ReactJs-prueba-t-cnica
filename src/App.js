import { useState, useEffect } from "react";
import LoginForm from "./components/LoginForm";
import Dashboard from "./pages/Dashboard";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => JSON.parse(localStorage.getItem("isAuthenticated")) || false
  );

  useEffect(() => {
    localStorage.setItem("isAuthenticated", JSON.stringify(isAuthenticated));

    document.body.style.background = isAuthenticated
      ? "linear-gradient(135deg, rgb(124, 208, 238), rgb(5, 105, 196))"
      : "linear-gradient(135deg, black, purple, gray)";
  }, [isAuthenticated]);

  return isAuthenticated ? (
    <Dashboard setIsAuthenticated={setIsAuthenticated} />
  ) : (
    <LoginForm setIsAuthenticated={setIsAuthenticated} />
  );
}

export default App;
