import { useState, useEffect } from "react";
import LoginForm from "./components/LoginForm";
import Dashboard from "./pages/Dashboard";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      document.body.style.background = "linear-gradient(135deg, rgb(124, 208, 238), rgb(5, 105, 196))";
    } else {
      document.body.style.background = "linear-gradient(135deg, black, purple, gray)";
    }
  }, [isAuthenticated]);

  return isAuthenticated ? (
    <Dashboard setIsAuthenticated={setIsAuthenticated} />
  ) : (
    <LoginForm setIsAuthenticated={setIsAuthenticated} />
  );
}

export default App;
