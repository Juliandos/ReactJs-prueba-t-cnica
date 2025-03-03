import { useState } from "react";
import LoginForm from "./components/LoginForm";
import Dashboard from "./pages/Dashboard";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return isAuthenticated ? (
    <Dashboard setIsAuthenticated={setIsAuthenticated} />
  ) : (
    <LoginForm setIsAuthenticated={setIsAuthenticated} />
  );
}

export default App;
