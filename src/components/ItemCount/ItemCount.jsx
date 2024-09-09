import { useEffect, useState, useRef } from "react";
import { Flex, Button, Text } from "@chakra-ui/react";

const ItemCount = () => {
  const [state, setState] = useState(0);
  const [stateTwo, setStateTwo] = useState(0);
  //   const divRef = useRef(null);

  const handleAdd = () => {
    setState(state + 1);
  };

  const handleRemove = () => {
    setState(state - 1);
    setStateTwo(stateTwo - 1);
  };
  //useEffect es un hook que nos permite controlar efectos secundarios de actualizaciones o renderizado que se producen en mi componente (control del ciclo de vida)
  //useEffect se compone de una funcion callback, un array de dependecias (puede estar vacio o no)

  //1era Forma de useEffect (NO RECOMENDABLE) - useEffect sin control / no controlado
  useEffect(() => {
    console.log("useEffect descontrolado");
    //   setTimeout(()=> {
    //     divRef.current.innerHTML = "Texto nuevo";
    //   }, 2000);
  });

  //2da forma de useEffect (controlado) - dependencias vacias // Solo se va ejecutar la primera vez que el componente se monta
  useEffect(() => {
    console.log("useEffect con dependencias vacias");
  }, []);

  //3era forma de useEffect - controlado con dependencias
  useEffect(() => {
    console.log("useEffect con dependencia");

    //funcion cleanup
  }, [stateTwo]);

  return (
    <Flex>
      <Button onClick={handleRemove}>-</Button>
      <Text>{state}</Text>
      //
      <Text>{stateTwo}</Text>
      <Button onClick={handleAdd}>+</Button>
      {/* <div ref={divRef}>texto</div> */}
    </Flex>
  );
};

export default ItemCount;
