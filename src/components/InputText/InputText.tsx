import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from 'react';
/* eslint-disable jsx-a11y/label-has-associated-control */
type InputTextProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  label: string;
  type?: string;
  icon?: ReactNode;
  error?: boolean;
  iconOnClick?: (e: unknown) => void;
};

function InputText({
  label = 'label',
  icon,
  iconOnClick,
  error = false,
  ...props
}: InputTextProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={label} className="text-sm font-semibold">
        {label} :
      </label>
      <div className="relative">
        <input
          id={label}
          className={`w-full rounded-md border border-black/30 px-2 py-1.5 outline-none transition-all duration-150 ${
            error
              ? 'border-red-700 focus:shadow-error'
              : 'focus:border-dark-blue hover:border-dark-blue focus:shadow-sh-blue'
          }`}
          {...props}
        />
        {icon && (
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-lg"
            onClick={iconOnClick}
          >
            {icon}
          </button>
        )}
      </div>
    </div>
  );
}

export default InputText;
