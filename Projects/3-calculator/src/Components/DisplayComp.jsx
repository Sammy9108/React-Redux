import styles from "./Display.module.css";

const DisplayComp = ({ displayVal }) => {
  return (
    <input
      className={styles.result}
      type="text"
      value={displayVal}
      readOnly
    ></input>
  );
};

export default DisplayComp;
