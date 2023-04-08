import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
/* eslint-disable jsx-a11y/label-has-associated-control */
type InputTextProps = DetailedHTMLProps<
  HTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  label: string;
  type?: string;
  icon?: ReactNode;
  iconOnClick?: (e: unknown) => void;
};

function InputText({
  label = 'label',
  icon,
  iconOnClick,
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
          className="w-full rounded-md border border-gray-500 px-2 py-1.5 outline-none transition-all duration-150 hover:border-dark-blue focus:border-dark-blue focus:shadow-blue"
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
