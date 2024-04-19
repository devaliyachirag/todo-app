import React, { FC } from "react";

interface InputProps {
  value: string;
  type: string;
  className: string;
  onchange: (value: string) => void;
  onKeyDown: (e: any) => void;
}

const Input: FC<InputProps> = ({
  value,
  onchange,
  type,
  className,
  onKeyDown,
}) => {
  return (
    <input
      value={value}
      onChange={(e) => onchange(e.target.value)}
      type={type}
      className={className}
      onKeyDown={(e) => onKeyDown(e)}
    />
  );
};

export default Input;
