import Button from "./Button";
const Form = ({ buttonLabel }) => {
  return (
    <form>
      <input type="text" />
      <Button label={buttonLabel} />
    </form>
  );
};

export default Form;
