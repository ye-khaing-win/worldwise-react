import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = (props: InputProps) => {
  const { ...rest } = props;
  return (
    <input
      className="w-full py-3 px-5 text-2xl border-none rounded-md bg-light-3 transition-all duration-200 focus:outline-none focus:bg-white text-dark-2"
      {...rest}
    />
  );
};

export default Input;
