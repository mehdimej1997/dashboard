import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

function Button({ ...props }: ButtonProps) {
  return (
    <button
      type="button"
      {...props}
      className="rounded-md bg-blue py-2.5 font-medium text-white transition-all duration-200 hover:opacity-70"
    >
      {props.children}
    </button>
  );
}

export default Button;
