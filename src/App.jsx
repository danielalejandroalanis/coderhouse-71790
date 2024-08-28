import React from "react";
import Button from "./components/Button";
import Form from "./components/Form";
import "./App.css";
import Container from "./components/Container";

function App() {

  //Pasar la propiedad label al componente Button
  return (
    <React.Fragment>
      <div>
        <Container buttonLabel="My button form" />
        {/* <Button label="Login" />
        <Button label="Contactame" />
        <Button label="Logout" />
        <Form buttonLabel="My form Button" /> */}
      </div>
    </React.Fragment>
  );
}

export default App;
