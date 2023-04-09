import { Button, ButtonProps } from 'antd';

function CustomButton({ ...props }: ButtonProps) {
  return (
    <Button
      type="primary"
      size="large"
      {...props}
      className={`rounded-md bg-blue py-2.5 font-semibold text-white transition-all duration-200 hover:opacity-70 ${props.className}`}
    >
      {props.children}
    </Button>
  );
}

export default CustomButton;
