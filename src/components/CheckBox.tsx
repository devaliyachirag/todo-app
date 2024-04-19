import React, { FC } from "react";

interface CheckBoxProps {
  className: string;
  onchange?: ((value: boolean) => void) | undefined;
  checked?: boolean | undefined;
}

const CheckBox: FC<CheckBoxProps> = ({ onchange, className, checked }) => {
  return (
    <input
      onChange={(e) => onchange && onchange(e.target.checked)}
      type="checkbox"
      className={className}
      checked={checked}
    />
  );
};

export default CheckBox;
