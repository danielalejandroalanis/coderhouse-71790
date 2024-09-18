import React from "react";
import { PropTypes } from "prop-types";
import { SiValorant } from "react-icons/si";

// Indicarle el tipo de propiedades a recibir
// Javascript no es un lenguaje tipado (como si lo sería typescript o Java)

export const PropTypesClass = ({ number, label, isValid }) => {
  return isValid ? (
    <div>El numero existe y es: {number * 10}</div>
  ) : (
    <div>{label}</div>
  );
};

PropTypesClass.propTypes = {
  number: PropTypes.number,
  isValid: PropTypes.bool,
  label: PropTypes.string.isRequired,
  // customFunction: PropTypes.func,
  // myObj: PropTypes.obj
};
