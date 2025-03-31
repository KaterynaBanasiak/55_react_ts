export interface ButtonProps {
  children: React.ReactNode;
  danger?: boolean;
  onClick?: () => void;
  type?: "submit" | "button" | "reset";
  disabled?: boolean;
}
