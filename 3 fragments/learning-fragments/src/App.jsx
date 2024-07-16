import FoodItems from "./Components/FoodItems";
import ErrorMessage from "./Components/ErrorMessage";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Container from "./Components/ContainerItems";
import FoodInput from "./Components/FoodInput";

function App() {
  /*if (foodItems.length === 0) {
    return <h3>we are hungry.</h3>;
  }*/
  //let emptyMessage = foodItems.length === 0 ? <h3>we are hungry.</h3> : null;

  /*let textArr = useState("Food Item Entered By User");
  let textToShow = textArr[0];
  let setText = textArr[1];*/

  let [foodItems, setFoodItems] = useState([]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let NewFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, NewFoodItem];
      setFoodItems(newItems);
    }
  };
  return (
    <>
      <Container>
        <Header></Header>
        <ErrorMessage item={foodItems}></ErrorMessage>
        <FoodInput handleOnclicktext={onKeyDown}></FoodInput>
        <FoodItems items={foodItems}></FoodItems>
      </Container>
    </>
  );
}

export default App;
