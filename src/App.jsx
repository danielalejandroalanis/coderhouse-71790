import React from "react";
import "./App.css";
import Container from "./components/Container/Container";

// componentes basados en clases
class MyComponent extends React.Component {
  render() {
    <div></div>;
  }
}

const App = () => {
  //object - Key y Value (clave y valor)
  const obj = {
    id: 1,
    title: "Producto 1",
    description: "Descripción del Producto 1",
    stock: 10,
    price: 1000,
    currencyType: "ARS",
    myFunction: () => {
      console.log("test");
    },
  };

  const { id, title, description } = obj;

  console.log(id, title, description);

  // === compara valor y tipo de dato
  // == compara valor --- ejemplo: "10" y 10 : true
  const number = 10;
  if (number === 10) {
    console.log("Es igual a " + number);
    if (typeof number === "number") {
      console.log("number");
    }
  } else {
    console.log("No es igual a " + number);
  }

  console.log(
    number === 10 ? `Es igual a ${number}` : `No es igual a ${number}`
  );

  const isRed = false;

  return (
    <React.Fragment>
      {/* <div className={isRed ? "my-class-red" : "my-class-blue"}> */}
      <div>
        <Container buttonLabel="My button form" label="My label" />
        <Container buttonLabel="My Button Form 2" />
        {/* <button onClick={() => (isRed = true)}></button> */}
      </div>
    </React.Fragment>
  );
};

export default App;
