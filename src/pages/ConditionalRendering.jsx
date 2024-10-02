import { useEffect, useState } from "react";
// import "../styles/ConditionalRendering.css";
import styles from "../styles/ConditionalRendering.module.css";

export const ConditionalRendering = () => {
  //Kiss: Keep it simple, stupid
  const [loading, setLoading] = useState(true);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    setTimeout(() => {
      setIsActive(true);
    }, 4000);
  }, []);

  //CSS in JS
  const myStyles = {
    color: isActive ? "blue" : "red",
  };

  const componentType = "button";

  const MyComponent = componentType === "button" ? Button : Input;

  //   if (loading) {
  //     return <h1>Loading...</h1>;
  //   } else {
  //     return (
  //       //   <h1 style={{ color: isActive ? "blue" : "red" }}>ConditionalRendering</h1>
  //       //   <h1 className={isActive ? 'isActive' : 'isNotActive'}>ConditionalRendering</h1>
  //       //   <h1 className={isActive ? styles.isActive : styles.isNotActive}>
  //       //     ConditionalRendering
  //       //   </h1>
  //       <h1 styles={myStyles}>ConditionalRendering</h1>
  //     );
  //   }

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <h1 style={myStyles}>ConditionalRendering</h1>
      )}
      <MyComponent />
    </div>
  );
};

const Button = () => {
  return <button>Button</button>;
};

const Input = () => {
  return <input type="text" />;
};
