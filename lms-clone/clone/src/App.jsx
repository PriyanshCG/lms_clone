import React, { useState } from "react";
import Landing from "./pages/Landing";
import Login from "./pages/Login";

function App() {
  const [currentPage, setCurrentPage] = useState("landing");

  return (
    <div>
      {currentPage === "landing" ? (
        <Landing onLogin={() => setCurrentPage("login")} />
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;