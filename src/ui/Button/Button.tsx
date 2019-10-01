import React from "react";
import classNames from "classnames";
import styles from "./Button.module.scss";

interface ButtonProps {
  label: string;
  btnType: "primary" | "secondary";
  onClick: any;
  className?: string;
}

const typeClassNames = {
  primary: "ButtonPrimary",
  secondary: "ButtonSecondary"
};

const Button = (props: ButtonProps) => {
  const typeClassName = typeClassNames[props.btnType];
  const buttonClassName = classNames(styles[typeClassName], props.className);

  return (
    <button onClick={props.onClick} className={buttonClassName}>
      {props.label}
    </button>
  );
};

Button.defaultProps = {
  btnType: "primary"
};

export default Button;
