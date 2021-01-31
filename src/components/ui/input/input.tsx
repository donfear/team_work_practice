import { spawn } from "child_process";
import React from "react";
import "./input.scss";

interface IInputProps extends TInput {
  label?: string;
}
type TInput = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export function Input(props: IInputProps) {
  const { label, ...inputProps } = props;
  return (
    <div className="input">
      {!!label && (
        <label>
          {label}
          {inputProps.required ? (
            <span className="input__required">*</span>
          ) : (
            ""
          )}
        </label>
      )}
      <input {...inputProps}></input>
    </div>
  );
}
