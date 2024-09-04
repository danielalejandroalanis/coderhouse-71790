import Button from "./Button";

//Componente basado en clases
// class Form extends React.Component {
  
//   render() {
//     return (
//       <form>
//         <input type="text" />
//         <Button label={this.props.buttonLabel} />
//       </form>
//     );
//   }
// }

const Form = ({ buttonLabel }) => {
  return (
    <form>
      <input type="text" />
      <Button label={buttonLabel} />
    </form>
  );
};

// function myFunction() {
//   console.log("test");
//   return (

//   <div></div>
//   )
// }


export default Form;
