import {
  Control,
  Controller,
  FieldError,
  RegisterOptions,
} from "react-hook-form";
import { Input as InputComponent } from "@heroui/input";

interface IInput {
  // control: Control;
  rules?: RegisterOptions;
  // error: FieldError;
  name: string;
  label?: string;
  placeholder?: string;
}

export const Input = ({
  // control,
  rules,
  // error,
  name,
  label,
  placeholder,
}: IInput) => {
  return (
    <Controller
      // control={control}
      rules={rules}
      name={name}
      render={({ field: { value, onChange } }) => (
        <InputComponent
          label={label}
          labelPlacement="inside"
          value={value}
          placeholder={placeholder}
          onValueChange={onChange}
          // errorMessage={error.message}
        />
      )}
    />
  );
};
