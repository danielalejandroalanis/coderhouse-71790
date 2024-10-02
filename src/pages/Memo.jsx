import { Button } from "@chakra-ui/react";
import React from "react";

//Si la propiedad count cambia se vuelve a renderizar, caso contrario renderiza el ya memorizado
const ChildMemo = React.memo(({ count }) => {
  console.log("Se renderiza el hijo");

  return <div>Valor del Estado Auxiliar: {count}</div>;
});

export const Memo = () => {
  //Memoization: la habilidad de memorizar el estado de un componente
  //Generalmente lo van a utilizar en componentes pequeños (no en paginas enteras)

  const [state, setState] = React.useState(0);
  const [auxState, setAuxState] = React.useState(0);

  const handleAdd = () => {
    setState(state + 1);
  };
  const handleAddAux = () => {
    setAuxState(auxState + 1);
  };

  console.log("Se renderiza el padre");

  return (
    <div>
      <Button onClick={handleAdd}>Incrementar</Button>
      <Button onClick={handleAddAux}>Incrementar Auxiliar</Button>
      <div>Valor del Estado: {state}</div>
      <ChildMemo count={auxState} />
    </div>
  );
};
