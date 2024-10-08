import React from "react";
import classNames from "classnames";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type: "primary" | "position" | "back";
  isLoading?: boolean;
}

const Button = (props: ButtonProps) => {
  const { children, onClick, type, isLoading } = props;

  const classes = classNames(
    "text-inherit uppercase px-7 py-3 text-lg rounded-md cursor-pointer",
    {
      "font-bold bg-brand-2 text-dark-1":
        type === "primary",
      "font-semibold border border-solid border-current":
        type === "back",
      "font-bold absolute z-[1000] text-2xl bottom-16 left-1/2 translate-x-[-50%] bg-brand-2 text-dark-1 shadow-md":
        type === "position",
      "pointer-events-none bg-light-1 border border-solid border-light-1 text-dark-0":
        isLoading,
    }
  );

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
