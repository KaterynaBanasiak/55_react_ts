import { ChangeEvent } from "react";
import styles from "./Input.module.css";

export interface InputProps {
  placeholder?: string;
  name: string;
  value?: string;
  type?: "text" | "email" | "number" | "password" | "tel";
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  id?: string;
}

function Input({ placeholder, name, value, type = "text", onChange, label, id }: InputProps) {
  return (
    <div className={styles.inputContainer}>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={styles.input}
      />
    </div>
  );
}

export default Input;


