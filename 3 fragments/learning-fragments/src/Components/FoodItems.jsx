import Item from "./Item";
import styles from "./Items.module.css";

const FoodItems = ({ items }) => {
  return (
    <ul className={`list-group list-group-item-light`}>
      {items.map((item) => (
        <Item
          key={item}
          foods={item}
          BuyButtonClicked={() => changeRowColor(index)}
        ></Item>
      ))}
    </ul>
  );
};

export default FoodItems;
