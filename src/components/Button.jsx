import styles from "./Button.module.css";
export default function Button({ lable, onClick }) {
  return (
    <button className={styles["filter_button"]} onClick={onClick}>
      {lable}
    </button>
  );
}
