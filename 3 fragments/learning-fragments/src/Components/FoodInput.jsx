import styles from "./FoodItems.module.css";

const FoodInput = ({ handleOnclicktext }) => {
  return (
    <input
      type="text"
      placeholder="Enter the Food Item here."
      className={styles.FoodItem}
      onKeyDown={handleOnclicktext}
    ></input>
  );
};

export default FoodInput;
