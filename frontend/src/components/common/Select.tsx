import {
  Control,
  Controller,
  FieldError,
  RegisterOptions,
  UseFormGetValues,
  UseFormSetValue,
} from "react-hook-form";
import { Select as SelectComponent, SelectItem } from "@heroui/react";

interface ISelect {
  control: Control;
  rules?: RegisterOptions;
  // error: FieldError;
  name: string;
  label?: string;
  options: string[];
  placeholder?: string;
}

export const Select = ({
  control,
  rules,
  // error,
  name,
  label,
  options = [],
  placeholder,
}: ISelect) => {
  return (
    <Controller
      control={control}
      rules={rules}
      name={name}
      render={({ field }) => (
        <SelectComponent
          {...field}
          label={label}
          labelPlacement="inside"
          value={field.value}
          placeholder={placeholder}
          selectionMode="multiple"
          selectedKeys={field.value.split(",")}
          // errorMessage={error?.message}
          onSelectionChange={field.onChange}
        >
          {options?.map((option) => (
            <SelectItem key={option}>{option}</SelectItem>
          ))}
        </SelectComponent>
      )}
    />
  );
};
