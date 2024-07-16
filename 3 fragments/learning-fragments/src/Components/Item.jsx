import styles from "./Items.module.css";

const Item = ({ foods, BuyButtonClicked }) => {
  return (
    <li className={`list-group-item`}>
      {foods}
      <button
        className={`${styles.ButtonCss} btn btn-info`}
        onClick={BuyButtonClicked}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
