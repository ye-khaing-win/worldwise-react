import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  type: "primary" | "secondary" | "back";
}

const Button = (props: ButtonProps) => {
  const { children, onClick, type } = props;

  return (
    <button
      className={`text-inherit uppercase px-7 py-3 text-lg border-none rounded-md cursor-pointer ${
        type === "primary"
          ? "font-bold bg-brand-2 text-dark-1"
          : ""
      } ${
        type === "back"
          ? "font-semibold border border-white border-solid"
          : ""
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
