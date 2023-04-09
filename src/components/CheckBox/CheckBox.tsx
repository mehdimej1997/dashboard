import { Checkbox, CheckboxProps } from 'antd';

function CustomCheckBox({ ...props }: CheckboxProps) {
  return (
    <Checkbox {...props} className="accent-slate-950">
      {props.children}
    </Checkbox>
  );
}

export default CustomCheckBox;
