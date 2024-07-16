import { useState } from "react";
import styles from "./App.module.css";
import DisplayComp from "./Components/DisplayComp";
import ButtonContainer from "./Components/ButtonContainer";

function App() {
  const [disVal, setDisVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setDisVal("");
    } else if (buttonText === "=") {
      const result = eval(disVal);
      setDisVal(result);
    } else {
      const NewVal = disVal + buttonText;
      setDisVal(NewVal);
    }
  };

  return (
    <>
      <div className={styles.calculator}>
        <DisplayComp displayVal={disVal}></DisplayComp>
        <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>
      </div>
    </>
  );
}

export default App;
