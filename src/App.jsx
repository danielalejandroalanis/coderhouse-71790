import React from "react";
import Button from "./components/Button";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div>
        <Button label="Login" />
        <Button label="Contactame" />
        <Button label="Logout" />
      </div>
    </React.Fragment>
  );
}

export default App;
