import styles from "./Input.module.css";

function Input() {
  return <input 
  placeholder="Введите текст"
  name="homeworkInput"
  className={styles.input} />;
}

export default Input;

