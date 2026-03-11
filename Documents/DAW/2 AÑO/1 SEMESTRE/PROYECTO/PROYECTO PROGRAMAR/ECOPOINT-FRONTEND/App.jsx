import { useState } from "react";
import Login from "./pages/Login";
import Ecopoints from "./pages/Ecopoints";

function App() {
  const [token, setToken] = useState(null);

  if (!token) {
    return <Login onLogin={setToken} />;
  }

  return <Ecopoints token={token} />;
}

export default App;
