import React from "react";
import TextField from "@mui/material/TextField";

type SMInputProps = {
  label: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  value?: string;
  name?: string;
  className?: string;
  disabled?: any;
};

export default function SMInput(props: SMInputProps) {
  const { label, onChange, type, value, name, className, disabled } = props;

  return (
    <div>
      <TextField
        variant="outlined"
        label={label}
        type={type || "text"}
        value={value}
        onChange={onChange}
        name={name}
        id={name}
        fullWidth
        className={className}
        disabled={disabled}
      />
    </div>
  );
}
