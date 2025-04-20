import {
  Control,
  Controller,
  FieldError,
  RegisterOptions,
} from "react-hook-form";
import { Select as SelectComponent, SelectItem } from "@heroui/react";

interface ISelect {
  // control: Control;
  rules?: RegisterOptions;
  // error: FieldError;
  name: string;
  label?: string;
  options: string[];
  placeholder?: string;
}

export const Select = ({
  // control,
  rules,
  // error,
  name,
  label,
  options,
  placeholder,
}: ISelect) => {
  return (
    <Controller
      // control={control}
      rules={rules}
      name={name}
      render={({ field: { value, onChange } }) => (
        <SelectComponent
          label={label}
          labelPlacement="inside"
          value={value}
          placeholder={placeholder}
          selectionMode="multiple"
          // errorMessage={error.message && error.message}
          onSelectionChange={onChange}
        >
          {options.map((option, index) => (
            <SelectItem key={index}>{option}</SelectItem>
          ))}
        </SelectComponent>
      )}
    />
  );
};
