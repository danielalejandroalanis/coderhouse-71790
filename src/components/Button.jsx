// Componente - Button
// El boton esta desestructurando (recibiendo) una propiedad llamada label

// function Button({label}) {
//     return (
//         <button>{label}</button>
//     )
// }

const Button = ({ label, myFunction }) => {
  return <button onClick={myFunction}>{label}</button>;
};

export default Button;
