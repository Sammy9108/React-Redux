import { useState } from "react";
import styles from "./App.module.css";
import DisplayComp from "./Components/DisplayComp";
import ButtonContainer from "./Components/ButtonContainer";

function App() {
  return (
    <>
      <div className={styles.calculator}>
        <DisplayComp></DisplayComp>
        <ButtonContainer></ButtonContainer>
      </div>
    </>
  );
}

export default App;
