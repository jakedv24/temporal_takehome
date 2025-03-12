"use client";

import React, { ChangeEvent, FC } from "react";

interface InputProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
}

const Input: FC<InputProps> = ({
  value,
  onChange,
  placeholder = "Search Pokemon",
  type = "text",
}) => {
  return (
    <input
      style={{ margin: "12px", outline: "1px solid black" }}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="input"
    />
  );
};

export default Input;
